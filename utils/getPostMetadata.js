import fs from 'node:fs';
import matter from 'gray-matter';

export default function getPostMetadata(basePath) {
  const folder = `${basePath}/`
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter(file => file.endsWith('.md'))

  const posts = markdownPosts.map(fileName => {
    const fileContent = fs.readFileSync(`${basePath}/${fileName}`, 'utf8')
    const matterResult = matter(fileContent)
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      slug: fileName.replace('.md', ''),
      tags: matterResult.data.tags
    }
  })
  return posts
}