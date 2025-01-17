/** @format */

import {
  Img,
  Poster,
  NewPost,
  Box,
  Profile,
  FocusBar,
  Category,
  BasicModal,
  MarkBox,
  Btn,
  OrderedImg,
  Report,
} from '../../../components';
import { radius, font, color, shadow } from '../../../styles';
import { css, cx } from '@emotion/css';

interface Props {
  [key: string]: any;
}

export default function Main({ text, next }: Props) {
  return (
    <div className={style}>
      <div className={'desc'}>
        <span>{text.description}</span>
        <div>
          <span>{text.mohae}</span>
          <span>{'에 오신 것을 환영합니다.'}</span>
        </div>
        <span>{text.subDesc}</span>
      </div>
      <div className={'ssary'}>
        <Img src={'/img/hello.png'} />
      </div>
      <div
        className={cx(css`
          width: 100px;
          height: 43px;
        `)}
        onClick={next}
      >
        <Btn main>{text.signUp}</Btn>
      </div>
    </div>
  );
}

const style = css`
  /* width: 480px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: lightblue; */
  .desc {
    * {
      width: fit-content;
      height: fit-content;
      margin: 0 auto;
    }
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    > :nth-child(1) {
      margin-top: 40px;
    }
    > :nth-child(2) {
      * {
        font-size: 24px;
      }
      > :first-child {
        ${font.weight[700]};
        margin-right: 4px;
      }
    }
    > :nth-child(3) {
      margin-top: 24px;
      text-align: center;
      font-size: 14px;
    }
  }
  > .ssary {
    margin: 16px 0;
    width: 83px;
    height: 111px;
  }
`;
