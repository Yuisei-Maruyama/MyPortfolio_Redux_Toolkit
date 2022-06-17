import React from 'react'

type Props = {
  documentNames: string[]
}

const DocumentList: React.FC<Props> = ({documentNames}) => {
  return (
    <>
      {
        documentNames.map((documentName, index) => {
          return (
            <p key={index}>{ documentName }</p>
          )
        })
      }
    </>
  );
}

export default DocumentList;