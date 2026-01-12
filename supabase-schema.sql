-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Create blog_posts table
CREATE TABLE blog_posts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  slug TEXT UNIQUE NOT NULL,

  -- Ukrainian content
  title_uk TEXT NOT NULL,
  excerpt_uk TEXT NOT NULL,
  content_uk TEXT,

  -- English content
  title_en TEXT NOT NULL,
  excerpt_en TEXT NOT NULL,
  content_en TEXT,

  -- Metadata
  category TEXT NOT NULL CHECK (category IN ('news', 'insights', 'technology', 'industry')),
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('published', 'draft', 'scheduled')),
  icon TEXT,
  image_url TEXT,
  read_time INTEGER DEFAULT 5,

  -- Scheduling
  scheduled_date TIMESTAMPTZ,
  published_at TIMESTAMPTZ,

  -- Timestamps
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create blog_images table
CREATE TABLE blog_images (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  post_id UUID REFERENCES blog_posts(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  alt TEXT,
  width INTEGER,
  height INTEGER,
  size INTEGER,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Create index for faster queries
CREATE INDEX idx_blog_posts_slug ON blog_posts(slug);
CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_blog_posts_published_at ON blog_posts(published_at);
CREATE INDEX idx_blog_images_post_id ON blog_images(post_id);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_blog_posts_updated_at
  BEFORE UPDATE ON blog_posts
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security (RLS)
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_images ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Allow public read access for published posts"
  ON blog_posts FOR SELECT
  USING (status = 'published');

CREATE POLICY "Allow public read access for images"
  ON blog_images FOR SELECT
  USING (true);

-- Create policies for admin write access (you'll need to set up auth)
CREATE POLICY "Allow admin full access to posts"
  ON blog_posts
  USING (auth.role() = 'authenticated');

CREATE POLICY "Allow admin full access to images"
  ON blog_images
  USING (auth.role() = 'authenticated');
