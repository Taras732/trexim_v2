import { createClient } from '@supabase/supabase-js'

// Supabase client configuration
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('⚠️ Supabase credentials not found. Using fallback mode.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types
export type BlogPost = {
  id: string
  slug: string
  title_uk: string
  excerpt_uk: string
  content_uk: string | null
  title_en: string
  excerpt_en: string
  content_en: string | null
  category: 'news' | 'insights' | 'technology' | 'industry'
  status: 'published' | 'draft' | 'scheduled'
  icon: string | null
  image_url: string | null
  read_time: number
  scheduled_date: string | null
  published_at: string | null
  created_at: string
  updated_at: string
}

export type BlogImage = {
  id: string
  post_id: string
  url: string
  alt: string | null
  width: number | null
  height: number | null
  size: number | null
  created_at: string
}

// Helper functions for blog operations
export const blogService = {
  // Get all published posts
  async getPublishedPosts(language: 'uk' | 'en' = 'uk') {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('status', 'published')
      .order('published_at', { ascending: false })

    if (error) throw error
    return data
  },

  // Get post by slug
  async getPostBySlug(slug: string) {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .eq('slug', slug)
      .single()

    if (error) throw error
    return data
  },

  // Get all posts (admin)
  async getAllPosts() {
    const { data, error } = await supabase
      .from('blog_posts')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return data
  },

  // Create post
  async createPost(post: Omit<BlogPost, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('blog_posts')
      .insert(post)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Update post
  async updatePost(id: string, updates: Partial<BlogPost>) {
    const { data, error } = await supabase
      .from('blog_posts')
      .update(updates)
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return data
  },

  // Delete post
  async deletePost(id: string) {
    const { error } = await supabase.from('blog_posts').delete().eq('id', id)

    if (error) throw error
  },

  // Upload image to Supabase Storage
  async uploadImage(file: File, folder: string = 'blog') {
    const fileExt = file.name.split('.').pop()
    const fileName = `${Math.random().toString(36).substring(2)}.${fileExt}`
    const filePath = `${folder}/${fileName}`

    const { data, error } = await supabase.storage
      .from('images')
      .upload(filePath, file)

    if (error) throw error

    // Get public URL
    const {
      data: { publicUrl },
    } = supabase.storage.from('images').getPublicUrl(filePath)

    return {
      path: data.path,
      url: publicUrl,
    }
  },

  // Delete image from storage
  async deleteImage(path: string) {
    const { error } = await supabase.storage.from('images').remove([path])

    if (error) throw error
  },
}
