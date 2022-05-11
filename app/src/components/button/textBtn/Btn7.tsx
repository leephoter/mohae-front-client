import { css, cx } from '@emotion/css';
import { color, shadow, font } from '../../../styles';
import { btnStyle, Props } from '../index';

function Btn7(props: Props) {
  const { disable, children, onClick } = props;
  const commonStyle = css`
    ${btnStyle.square}
    width: 170px;
    height: 43px;
    background-color: ${color.main};
    color: white;
    ${font.size[14]}
    ${font.weight.regular}
    ${shadow.normal};

    &:active {
      background-color: ${color.darker};
    }
  `;

  const disableState = css`
    cursor: unset;
    background-color: ${color.light4};
    &:active {
      background-color: ${color.light4};
    }
  `;

  const imgStyle = css`
    width: 20px;
    height: 20px;
    margin-left: 9.67px;
  `;

  const show = () =>
    disable ? (
      <button onClick={onClick} className={cx(commonStyle, disableState)}>
        {children}
        <img src={'img/move.png'} className={cx(imgStyle)} />
      </button>
    ) : (
      <button onClick={onClick} className={cx(commonStyle)}>
        {children}
        <img src={'img/move.png'} className={cx(imgStyle)} />
      </button>
    );

  return show();
}

export default Btn7;
