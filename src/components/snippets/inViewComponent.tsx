/*
usage: 

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const InViewComponent = dynamic(() => import('@/components/snippets/inView'), { ssr: false });

const HomePage: React.FC = () => {
  const [isInView, setIsInView] = useState(false);

  const handleInViewChange = (inView: boolean) => {
    setIsInView(inView);
  };

  return (
    <div>
      <InViewComponent onInViewChange={handleInViewChange}>
        <p>{`要素は${isInView ? 'ビューポート内' : 'ビューポート外'}にあります。`}</p>
      </InViewComponent>
    </div>
  );
};

export default HomePage;
  
*/

import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface InViewComponentProps {
  onInViewChange: (inView: boolean) => void;
  children: React.ReactNode;
}

const InViewComponent: React.FC<InViewComponentProps> = ({
  onInViewChange,
  children,
}) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    onInViewChange(inView);
  }, [inView, onInViewChange]);

  return <div ref={ref}>{children}</div>;
};

export default InViewComponent;
