/**
 * Migration script to move data from JSON files to Supabase
 *
 * Run with: npx tsx scripts/migrate-to-supabase.ts
 */

import { createClient } from '@supabase/supabase-js'
import ukData from '../src/locales/uk.json'
import enData from '../src/locales/en.json'

// Load credentials from .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Missing Supabase credentials in .env.local')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseAnonKey)

async function migrateBlogPosts() {
  console.log('🚀 Starting migration...\n')

  const ukPosts = ukData.blog.posts
  const enPosts = enData.blog.posts

  const postsToMigrate = Object.entries(ukPosts).map(([slug, ukPost]: [string, any]) => {
    const enPost = enPosts[slug as keyof typeof enPosts] || ukPost

    return {
      slug,
      title_uk: ukPost.title,
      excerpt_uk: ukPost.excerpt,
      content_uk: ('content' in ukPost ? ukPost.content : '') || '',
      title_en: enPost.title,
      excerpt_en: enPost.excerpt,
      content_en: ('content' in enPost ? enPost.content : '') || '',
      category: ukPost.category,
      status: 'published' as const,
      icon: ukPost.icon || '📝',
      image_url: ukPost.image || null,
      read_time: ukPost.readTime || 5,
      published_at: new Date().toISOString(),
    }
  })

  console.log(`📝 Found ${postsToMigrate.length} posts to migrate\n`)

  for (const post of postsToMigrate) {
    try {
      // Check if post already exists
      const { data: existing } = await supabase
        .from('blog_posts')
        .select('id')
        .eq('slug', post.slug)
        .single()

      if (existing) {
        console.log(`⏭️  Skipping "${post.title_uk}" (already exists)`)
        continue
      }

      // Insert new post
      const { error } = await supabase.from('blog_posts').insert(post)

      if (error) {
        console.error(`❌ Error migrating "${post.title_uk}":`, error.message)
      } else {
        console.log(`✅ Migrated: "${post.title_uk}"`)
      }
    } catch (error) {
      console.error(`❌ Unexpected error:`, error)
    }
  }

  console.log('\n✨ Migration completed!')
}

// Run migration
migrateBlogPosts().catch((error) => {
  console.error('💥 Migration failed:', error)
  process.exit(1)
})
