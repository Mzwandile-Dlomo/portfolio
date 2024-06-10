import React, { useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @keyframes horizontal-scroll {
    to {
      transform: translateX(calc(-50% - .75rem));
    }
  }
`;

const TagScrollers = styled.div`
  width: 100%;
  max-width: 1200px;
  overflow: hidden;
`;

const TagScroller = styled.div`
  display: grid;
  gap: 1.5rem;
  mask: linear-gradient(90deg, #0000, var(--background) 15%, var(--background) 85%, #0000);
`;

const TagList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (prefers-reduced-motion) {
    flex-flow: row nowrap;
    overflow: auto;
    scrollbar-width: none;
    scrollbar-color: transparent transparent;
    
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background: transparent;
    }
    &::-webkit-scrollbar {
      display: none;
      width: 0;
      height: 0;
    }
  }

  &.scrolling {
    width: max-content;
    flex-wrap: nowrap;
    animation: horizontal-scroll var(--duration) var(--direction, normal) linear infinite;

    &:hover {
      animation-play-state: paused;
    }
  }

  &:nth-child(even) {
    --direction: reverse;
  }
`;

const TagItem = styled.li`
  font-family: system-ui;
  font-size: 1.125rem;
  line-height: 1;
  padding: 0.625rem 1.375rem;
  border: 2px solid var(--border);
  border-radius: 10ch;
  white-space: nowrap;
  color: red;
`;

const TagScrollerComponent = () => {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery && !mediaQuery.matches) {
      const tagScroller = document.querySelector(".tag-scroller");
      const allTags = tagScroller.querySelectorAll("li");
  
      function createElement(tagName, className = "") {
        const elem = document.createElement(tagName);
        elem.className = className;
        return elem;
      }
  
      function scrollersFrom(elements, numColumns = 2) {
        const fragment = new DocumentFragment();
        elements.forEach((element, i) => {
          const column = i % numColumns;
          const children = fragment.children;
          if (!children[column]) fragment.appendChild(createElement("ul", "tag-list"));
          children[column].appendChild(element);
        });
        return fragment;
      }
  
      const scrollers = scrollersFrom(allTags, 2);
      tagScroller.innerHTML = "";
      tagScroller.appendChild(scrollers);
      addScrolling();
  
      function addScrolling() {
        tagScroller.classList.add("scrolling");
        document.querySelectorAll(".tag-list").forEach((tagList) => {
          const scrollContent = Array.from(tagList.children);
          scrollContent.forEach((listItem) => {
            const clonedItem = listItem.cloneNode(true);
            clonedItem.setAttribute("aria-hidden", true);
            tagList.appendChild(clonedItem);
          });
          tagList.style.setProperty("--duration", (tagList.clientWidth / 100) + "s");
        });
      }
    }
  }, []);

  const tags = [
    "SEO / SEM", "Accessibility", "Consumer Insights", "Back-end", "UI", 
    "CMS", "UX", "Market Research", "Measurement Strategy", "Data Architecture", 
    "Online / Digital", "Web Analytics", "Display", "Brand Identity", "Front-end", 
    "Product Design", "Omnichannel Strategy", "Offline / Print", "Audio", 
    "Media Strategy", "POS", "SoMe", "CRM", "Motion Graphics", "OOH / DOOH", 
    "Film Production", "Campaign Development", "Brand Strategy"
  ];

  return (
    <>
      <GlobalStyle />
      <TagScrollers>
        <TagScroller className="tag-scroller">
          <TagList className="tag-list">
            {tags.map(tag => (
              <TagItem key={tag}>{tag}</TagItem>
            ))}
          </TagList>
        </TagScroller>
      </TagScrollers>
    </>
  );
};

export default TagScrollerComponent;
