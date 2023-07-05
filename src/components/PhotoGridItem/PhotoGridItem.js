import React from 'react';
import styled from 'styled-components/macro';

const PhotoGridItem = ({ id, src_jpg, src_avif, alt, tags }) => {
  const unArrayed = (array) => {
    return array.join(", ");
  }
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source
            type="image/avif"
            srcSet={unArrayed(src_avif)} />
          <source
            type="image/jpg"
            srcSet={unArrayed(src_jpg)} />
          <Image 
            alt={alt}
            src={src_jpg[0]} 
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
  display: flex;
  overflow: hidden;
  gap: 8px;
`;

const Tag = styled.li`
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);
  // my temp code.
  white-space: nowrap;
  
  &:last-of-type {
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export default PhotoGridItem;
