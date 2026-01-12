import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

const LOCALES_DIR = path.join(process.cwd(), 'src', 'locales')

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const lang = searchParams.get('lang') || 'uk'

    const data = JSON.parse(
      fs.readFileSync(path.join(LOCALES_DIR, `${lang}.json`), 'utf-8')
    )

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load content' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const body = await request.json()
    const { lang, section, key, value } = body

    const filePath = path.join(LOCALES_DIR, `${lang}.json`)
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    // Оновлюємо значення за шляхом
    if (section && key) {
      if (!data[section]) data[section] = {}
      data[section][key] = value
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to update content' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { lang, updates } = body

    const filePath = path.join(LOCALES_DIR, `${lang}.json`)
    let data = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

    // Застосовуємо всі оновлення
    for (const update of updates) {
      const { path: updatePath, value } = update
      const keys = updatePath.split('.')

      let current = data
      for (let i = 0; i < keys.length - 1; i++) {
        if (!current[keys[i]]) current[keys[i]] = {}
        current = current[keys[i]]
      }
      current[keys[keys.length - 1]] = value
    }

    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8')

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to bulk update content' },
      { status: 500 }
    )
  }
}
