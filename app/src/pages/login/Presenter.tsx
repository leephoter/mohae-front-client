/** @format */

import { Img, FocusBar, BasicModal } from '../../components';
import { radius, font, color, shadow } from '../../styles';
import { css, cx } from '@emotion/css';
import { ReactElement } from 'react';
import Login from './login/Login';
import Agreement from './register/Agreement';
import Main from './register/Main';
import PersonalInfo from './register/PersonalInfo';
import SelectInfo from './register/SelectInfo';

interface Props {
  [key: string]: any;
}

export default function Presenter({
  text,
  isOpenModal,
  children,
  part,
  onClick,
}: Props): ReactElement {
  const mainContents = [
    <Login text={text} />,
    <Main text={text} next={onClick.enterRegister} />,
    <Agreement text={text} next={onClick.agreement} />,
    <PersonalInfo text={text} part={part} next={onClick.finishedInputInfo} />,
    <SelectInfo next={onClick.finishedAll} />,
  ];

  const style = css`
    width: 100%;
    height: 100%;
    overflow: hidden;
    ${radius[24]}
    padding: ${`${part < 2 ? '45px 228px 0' : '37px 228px 0'}`};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    > .logo {
      width: 66px;
      height: ${`${part < 2 ? '50px' : '0'}`};
      transition: 0.3s all ease-in-out;
      overflow: hidden;
    }
    > ul {
      display: flex;
      * {
        font-size: 24px;
      }
      > *:not(:last-child) {
        margin-right: 161px;
      }
      > .login {
        color: ${`${part ? color.dark1 : color.main}`};
      }
      > .register {
        color: ${`${part ? color.main : color.dark1}`};
      }
      margin-bottom: 16px;
    }
    form {
      > .input {
        width: 480px;
        height: 52px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 16px;
        margin-top: 24px;
        background-color: white;
        ${radius[6]};
        ${shadow.inputGray};
        .icon {
          width: 24px;
          height: 24px;
        }
        input {
          width: 408px;
          height: 20px;
        }
      }
      > .option {
        width: 100%;
        &,
        * {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        * {
          cursor: pointer;
          color: ${color.dark1};
        }
        margin: 16px 0 24px;
        font-size: 14px;
        input {
          -moz-appearance: none;
          -webkit-appearance: none;
          -o-appearance: none;
          width: 20px;
          height: 20px;
          ${radius[6]};
          margin-right: 8px;
          background-color: white;
          box-shadow: 0px 0px 4px rgba(132, 131, 141, 0.25);
        }
      }
    }
    > .btn {
      width: 100%;
      height: 52px;
    }
    > .container {
      width: calc(480px + 16px);
      padding: 0 8px;
      overflow-x: hidden;
      overflow-y: visible;
      height: fit-content;
      padding-bottom: 8px;

      display: flex;
      justify-content: flex-start;
      ::-webkit-scrollbar {
        display: none; /* Chrome, Safari, Opera*/
      }
      > .main {
        display: flex;
        justify-content: flex-start;
        width: fit-content;
        transition: 0.3s all ease-in-out;
        transform: ${`translateX(calc(${(480 + 16) * -part}px))`};
        & > * {
          width: 480px;
        }
        & > *:not(:last-child) {
          margin-right: 16px;
        }
      }
    }
    > .focusbar {
      width: 100%;
      height: 6px;
      background-color: ${color.light4};
      border-radius: 4px;
      overflow: hidden;
      > div {
        height: 100%;
        width: 50%;
        background-color: ${color.main};
        transition: 0.3s all ease-in-out;
        transform: ${`translate(${part ? '100%' : '0'})`};
      }
    }
  `;
  return (
    <BasicModal small visible={isOpenModal}>
      {/* edit visible={isOpenModal} after test */}
      <div className={cx(style)}>
        <div className={'logo'}>
          <Img src={'/img/logo.png'} />
        </div>
        <ul className={'menu'}>
          <button className={'login'} onClick={onClick.login}>
            {text.login}
          </button>
          <button className={'register'} onClick={onClick.register}>
            {text.register}
          </button>
        </ul>
        <div className={'focusbar'}>
          <div />
        </div>
        <div className={'container'}>
          <div className={'main'}>{mainContents}</div>
        </div>
      </div>
    </BasicModal>
  );
}
