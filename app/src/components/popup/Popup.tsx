import { css, cx } from '@emotion/css';
import { radius, shadow, font } from '../../styles';

interface Props {
  [key: string]: any;
}

function Popup({ text1, text2, rightBtn, leftBtn, visible }: Props) {
  const container = css`
    visibility: ${visible ? 'visible' : 'hidden'};
  `;

  const box = css`
    background-color: white;
    ${radius[6]}
    ${shadow.normal}
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 360px;
    height: 205px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 3;
  `;

  const text = css`
    width: 230px;
    line-height: 23.8px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    ${font.size[14]}
    ${font.weight.regular}
  `;

  const btnWrapper = css`
    margin-top: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  const left = css`
    margin-right: 8px;
  `;

  const overlay = css`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 2;
  `;

  return (
    <div className={cx(container)}>
      <div className={cx(box)}>
        <div className={cx(text)}>
          {text1}
          <br />
          {text2}
        </div>
        <div className={cx(btnWrapper)}>
          {leftBtn && <div className={cx(left)}>{leftBtn}</div>}
          <div>{rightBtn}</div>
        </div>
      </div>
      <div className={cx(overlay)}></div>
    </div>
  );
}

export default Popup;
