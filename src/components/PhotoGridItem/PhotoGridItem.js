import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, /*src_jpg, src_avif*/ src, alt, tags }) => {
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          {/* {Josh's solution under there is much better} */}
          <source 
            type="image/avif"
            srcSet={`
              ${src.replace('jpg', 'avif')} 1x,  
              ${src.replace('.jpg', '@2x.avif')} 2x,
              ${src.replace('.jpg', '@3x.avif')} 3x
            `}
          />
          <source
            type="image/jpeg"
            srcSet={`
              ${src} 1x,
              ${src.replace('.jpg', '@2x.jpg')} 2x,
              ${src.replace('.jpg', '@3x.jpg')} 3x
            `} />
          {/* My original code is below*/}
          {/* <source
                type="image/avif"
                srcSet={`
                  ${src_avif[0]} 1x,
                  ${src_avif[1]} 2x,
                  ${src_avif[2]} 3x,
                `} 
                />
          <source
            type="image/jpeg"
            srcSet={`
                  ${src_jpg[0]} 1x,
                  ${src_jpg[1]} 2x,
                  ${src_jpg[2]} 3x,
                `} 
            /> */}
          <Image 
            alt={alt}
            src={src}
            // src={src_jpg[0]} 
          />
        </picture>    
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  border-radius: 2px;
  margin-bottom: 8px;
  width: 100%;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`;

const Tags = styled.ul`
  /* display: flex;
  overflow: hidden;
  gap: 8px; */
  // Josh's solution code down below.
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 4px 0;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  // my temp codes down below.
  /* white-space: nowrap;
  
  &:last-of-type {
    overflow: hidden;
    text-overflow: ellipsis;
  } */
  // Josh's solution codes down below.
  display: inline;
  &:not(:last-of-type) {
    margin-right: 8px;
  }
`;

export default PhotoGridItem;
