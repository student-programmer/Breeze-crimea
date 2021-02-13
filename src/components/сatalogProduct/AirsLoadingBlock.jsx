import React from 'react'
import ContentLoader from "react-content-loader"
const AirsLoadingBlock = () => {
    return (
        
            <ContentLoader 
          speed={2}
          width={400}
          height={300}
          viewBox="0 0 400 300"
          backgroundColor="#f0f0f0"
          foregroundColor="#dedede"
        >
          <rect x="0" y="0" rx="0" ry="0" width="300" height="200" /> 
          <rect x="0" y="196" rx="5" ry="5" width="400" height="50" /> 
          <rect x="13" y="237" rx="0" ry="0" width="344" height="0" /> 
          <rect x="0" y="250" rx="5" ry="5" width="400" height="50" />
        </ContentLoader>
    )
}

export default AirsLoadingBlock
