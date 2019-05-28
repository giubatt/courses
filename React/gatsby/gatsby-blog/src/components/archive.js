import React from "react"
import { StaticQuery, graphql, Link } from "gatsby"

const POST_ARCHIVE_QUERY = graphql`
  query BlogPostArchive {
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        id

        frontmatter {
          title
          slug
        }
      }
    }
  }
`

const Archive = () => (
  <StaticQuery
    query={POST_ARCHIVE_QUERY}
    render={({ allMarkdownRemark }) => (
      <>
        <aside>
          <h3>Archive</h3>
          {allMarkdownRemark.nodes.map(node => (
            <Link to={`/posts/${node.frontmatter.slug}`}>
              <li key={node.id}>{node.frontmatter.title}</li>
            </Link>
          ))}
        </aside>
      </>
    )}
  />
)

export default Archive
