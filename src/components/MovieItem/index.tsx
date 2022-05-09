import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

import { FADE_IN_DURATION, SLIDE_IN_DURATION } from '@src/constants';

import AnimationContent from '@components/AnimationContent';
import AnimationImage from '@components/AnimationImage';

import Card from './Card';
import Wrapper from './Wrapper';

interface Props {
  item: { [index: string]: any };
  order: number;
  listLength: number;
}

const MovieItem: FunctionComponent<Props> = ({ item, order, listLength }) => {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(`/${item.id as number}`);
  };
  return (
    <Wrapper
      anim_delay={order * SLIDE_IN_DURATION}
      anim_duration={SLIDE_IN_DURATION}
    >
      <Card onClick={onClick}>
        <AnimationImage
          item={item}
          anim_duration={FADE_IN_DURATION}
          anim_delay={(order + 1) * SLIDE_IN_DURATION}
        />
        <AnimationContent
          anim_delay={listLength * SLIDE_IN_DURATION + FADE_IN_DURATION}
        >
          <h1>{item.original_title}</h1>
          <span>{item.release_date}</span>
        </AnimationContent>
      </Card>
    </Wrapper>
  );
};

export default MovieItem;
