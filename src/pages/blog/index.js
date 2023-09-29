import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../../components/layout'

const BlogPage = ({data}) => {
    return (
        <Layout pageTitle='My Blog Posts'>
            {
                data.allMdx.nodes.map((node) => (
                    <article className='m-5' key={node.id}>
                    <h2 className=' text-3xl text-purple-500 font-semibold'>
                    <Link to={`/blog/${node.frontmatter.slug}`}>

                    {node.frontmatter.title}
                    </Link>
                    </h2>
                    <p>Posted: {node.frontmatter.date}</p>
                    <p>{node.excerpt}</p>
                    </article>
                ))
            }

            <p>My cool posts go here.</p>
        </Layout>
    )
}

export const query = graphql`
    query {
        allMdx(sort: {frontmatter: {date: DESC}}) {
            nodes {
              frontmatter {
                date(formatString: "MMMM D, YYYY")
                title
                slug
              }
              id
              excerpt
            }
          }
    }
`
// export const Head = () => <Seo title='My Blog Posts' />

export default BlogPage