import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const LOCALES_DIR = path.join(process.cwd(), 'src', 'locales')

export async function GET() {
  try {
    const ukData = JSON.parse(
      fs.readFileSync(path.join(LOCALES_DIR, 'uk.json'), 'utf-8')
    )
    const enData = JSON.parse(
      fs.readFileSync(path.join(LOCALES_DIR, 'en.json'), 'utf-8')
    )

    return NextResponse.json({
      uk: ukData.blog,
      en: enData.blog,
    })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load blog data' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { postId, ukData, enData } = body

    // Читаємо поточні дані
    const ukLocale = JSON.parse(
      fs.readFileSync(path.join(LOCALES_DIR, 'uk.json'), 'utf-8')
    )
    const enLocale = JSON.parse(
      fs.readFileSync(path.join(LOCALES_DIR, 'en.json'), 'utf-8')
    )

    // Оновлюємо дані
    if (!ukLocale.blog.posts) ukLocale.blog.posts = {}
    if (!enLocale.blog.posts) enLocale.blog.posts = {}

    ukLocale.blog.posts[postId] = ukData
    enLocale.blog.posts[postId] = enData

    // Зберігаємо назад у файли
    fs.writeFileSync(
      path.join(LOCALES_DIR, 'uk.json'),
      JSON.stringify(ukLocale, null, 2),
      'utf-8'
    )
    fs.writeFileSync(
      path.join(LOCALES_DIR, 'en.json'),
      JSON.stringify(enLocale, null, 2),
      'utf-8'
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to save blog post' },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const postId = searchParams.get('postId')

    if (!postId) {
      return NextResponse.json(
        { error: 'Post ID is required' },
        { status: 400 }
      )
    }

    const ukLocale = JSON.parse(
      fs.readFileSync(path.join(LOCALES_DIR, 'uk.json'), 'utf-8')
    )
    const enLocale = JSON.parse(
      fs.readFileSync(path.join(LOCALES_DIR, 'en.json'), 'utf-8')
    )

    delete ukLocale.blog.posts[postId]
    delete enLocale.blog.posts[postId]

    fs.writeFileSync(
      path.join(LOCALES_DIR, 'uk.json'),
      JSON.stringify(ukLocale, null, 2),
      'utf-8'
    )
    fs.writeFileSync(
      path.join(LOCALES_DIR, 'en.json'),
      JSON.stringify(enLocale, null, 2),
      'utf-8'
    )

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to delete blog post' },
      { status: 500 }
    )
  }
}
