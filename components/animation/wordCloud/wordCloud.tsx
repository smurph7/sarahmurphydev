import * as THREE from 'three';
import * as React from 'react';
import { useFrame } from '@react-three/fiber';
import { Text } from '@react-three/drei';

import { colors } from 'theme';

const Word = ({
  position,
  children
}: {
  position: THREE.Vector3;
  children: string;
}) => {
  const color = new THREE.Color();
  const fontProps = {
    fontSize: 2.5,
    letterSpacing: -0.05,
    lineHeight: 1,
    'material-toneMapped': false
  };

  const ref = React.useRef();

  const [hovered, setHovered] = React.useState(false);
  const over = (e: { stopPropagation: () => any }) => (
    e.stopPropagation(), setHovered(true)
  );
  const out = () => setHovered(false);

  useFrame(({ camera }) => {
    ref?.current?.quaternion?.copy(camera.quaternion);
    ref?.current?.material?.color?.lerp(
      color.set(hovered ? colors.freshLemon : 'white'),
      0.1
    );
  });

  return (
    <React.Suspense fallback={null}>
      <Text
        ref={ref}
        onPointerOver={over}
        onPointerOut={out}
        position={position}
        {...fontProps}
      >
        {children}
      </Text>
    </React.Suspense>
  );
};

export const WordCloud = ({ count = 4, radius = 20 }) => {
  const words = React.useMemo(() => {
    const skills = [
      'TypeScript',
      'JavaScript',
      'ReactJS',
      'React Query',
      'Git',
      'Storybook',
      'Zustand',
      'Redux',
      'Java',
      'SQL',
      'Next.js',
      'ES6',
      'React Hooks',
      'HTML',
      'CSS',
      'npm',
      'nodeJS',
      'Jest',
      'Cypress',
      'React Testing Library',
      'TDD',
      'Agile',
      'CI/CD'
    ];
    const temp = [];
    const spherical = new THREE.Spherical();
    const phiSpan = Math.PI / (count + 1);
    const thetaSpan = (Math.PI * 2) / count;
    for (let i = 0; i < 1; i++) {
      for (let j = 0; j < skills.length; j++) {
        temp.push({
          vector: new THREE.Vector3().setFromSpherical(
            spherical.set(radius, (phiSpan * j) / 2, thetaSpan * (j + 1))
          ),
          word: skills[j]
        });
      }
    }

    return temp;
  }, [count, radius]);

  return (
    <>
      {words.map(
        ({ word, vector }: { word: string; vector: THREE.Vector3 }) => (
          <Word key={word} position={vector}>
            {word}
          </Word>
        )
      )}
    </>
  );
};
