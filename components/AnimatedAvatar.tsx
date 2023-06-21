import { Avatar, AvatarProps } from "@mui/material";
import { useSpring, animated } from "@react-spring/web";

export default function AnimatedAvatar(
  props: AvatarProps & { isBig: boolean; isPopping: boolean }
) {
  const { isBig, isPopping, ...rest } = props;

  const style = useSpring({
    from: {
      opacity: 1,
      transform: `scale(${isBig ? 1.2 : 1})`,
    },
    to: {
      opacity: isPopping ? 0 : 1,
      transform: `scale(${isBig ? 1 : 1.2})`,
    },
  });

  return (
    <animated.div style={style}>
      <Avatar {...rest} />
    </animated.div>
  );
}
