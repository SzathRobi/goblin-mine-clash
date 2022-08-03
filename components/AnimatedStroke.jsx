import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import Animated, {
  Easing,
  useAnimatedProps,
  useSharedValue,
  useAnimatedStyle,
  withDelay,
} from 'react-native-reanimated';
import { Path } from 'react-native-svg';

const AnimatedPath = Animated.createAnimatedComponent(Path);
export default function AnimatedStroke({ d, progress, fill }) {
  const [length, setLength] = useState(0);
  const ref = useRef(null);

  //const logoOpacity = useSharedValue(progress.value);

  const strokeAnimation = useAnimatedProps(() => ({
    strokeDashoffset: length - length * progress.value,
    strokeWidth: 3,
    fillOpacity: progress.value / 1.75,
  }));

  const opacityStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value, //logoOpacity.value,
    };
  });

  const [animation, setAnimation] = useState(useAnimatedProps(() => ({})));
  useEffect(() => {
    setTimeout(() => {
      setAnimation(strokeAnimation);
    }, 500);
  }, []);

  return (
    <AnimatedPath
      animatedProps={animation}
      style={opacityStyle}
      onLayout={() => setLength(ref.current.getTotalLength())}
      ref={ref}
      d={d}
      stroke="black"
      strokeWidth={0}
      strokeDasharray={length}
      fill={fill}
      fillOpacity={0}
    />
  );
}
