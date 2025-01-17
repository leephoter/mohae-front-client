/** @format */

import { useState, useEffect } from 'react';
import { css, cx } from '@emotion/css';
import { color, radius, font } from '../../styles';
import { Box, FocusBar, BasicModal, Carousel, PostIt } from '../../components';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../redux/root';
import getToken from '../../utils/getToken';
import { get_spec_info } from '../../redux/spec/reducer';
import axios from 'axios';
import { Btn } from '../../components';
import { spec_visit } from '../../redux/modal/reducer';
import { ENDPOINT } from '../../utils/ENDPOINT';

export default function Visit() {
  const isOpen = useSelector((state: RootState) => state.modal.openSpecVisit);
  const TOKEN = getToken();

  const text: { [key: string]: any } = {
    sir: '님',
  };
  const [isEdit, setIsEdit] = useState(false);
  const specInfo = useSelector((state: RootState) => state.spec.specInfo);
  const dispatch = useDispatch();
  const [value, setValue] = useState({
    title: '',
    description: '',
  });

  useEffect(() => {}, []);

  const imgURLs =
    specInfo &&
    specInfo.specPhotos.length > 0 &&
    specInfo.specPhotos.map((img: any, index: number) => img.photo_url);

  const clickEditBtn = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsEdit(!isEdit);
    setValue({
      title: specInfo.title,
      description: specInfo.description,
    });
  };

  const inputTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const getTitle = e.currentTarget.value;
    setValue({
      ...value,
      title: getTitle,
    });
  };

  const inputDescription = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const getDescription = e.currentTarget.value;
    setValue({
      ...value,
      description: getDescription,
    });
  };
  const patchRequest = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    const formData = new FormData();
    formData.append('title', value.title);
    formData.append('description', value.description);
    dispatch(
      get_spec_info({
        ...specInfo,
        title: value.title,
        description: value.description,
      })
    );
    setIsEdit(!isEdit);

    axios
      .patch(`${ENDPOINT}specs/${specInfo.no && specInfo.no}`, formData, {
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${TOKEN}`,
        },
      })
      .then((res) => {
        console.log(`res.data`, res.data);
      })
      .catch((err) => {
        console.log('err :>> ', err);
      });
  };

  const editLayout = (
    <>
      <div className={'box texts'}>
        <input
          maxLength={15}
          className={'title'}
          value={value.title && value.title}
          onChange={inputTitle}
          spellCheck={false}
        />
        <div>
          <FocusBar light thin />
        </div>
        <textarea
          maxLength={300}
          className={'description'}
          value={value.description && value.description}
          onChange={inputDescription}
          spellCheck={false}
        ></textarea>

        <div className={'footer'}>
          <div className={'number'}>
            <span>{value.description && value.description.length}</span>
            <span>{'/'}</span>
            <span>{300}</span>
          </div>
          <div className={'complete'} onClick={patchRequest}>
            <Btn main>{'완료'}</Btn>
          </div>
        </div>
      </div>
    </>
  );

  const viewLayout = (
    <>
      <div className={'box texts'}>
        <div className={'title'}>{specInfo && specInfo.title}</div>
        <div>
          <FocusBar light thin />
        </div>
        <div className={'wrapper'}>
          <div className={'description'}>
            {specInfo && specInfo.description}
          </div>
        </div>
      </div>
    </>
  );

  const reset = (e: React.MouseEvent<Element>) => {
    setIsEdit(false);
    setValue({
      title: specInfo.title,
      description: specInfo.description,
    });
    dispatch(spec_visit(!isOpen));
  };

  return (
    <BasicModal big visible={isOpen} reset={reset}>
      <div className={cx(style)}>
        <div className={'title'}>
          <div>
            <span className={'user'}>{specInfo && specInfo.nickname}</span>
            <span>{text.sir}</span>
          </div>
          <div className={'report-btn'} onClick={clickEditBtn}>
            <Btn white>{isEdit ? '수정 중...' : '수정하기'}</Btn>
          </div>
        </div>
        <div className={'wrapper'}>
          <PostIt big>
            <div className={'carousel'}>
              <Carousel outsideBtn imgs={imgURLs && imgURLs} />
            </div>
          </PostIt>
          <Box size={[336, 470]}>{isEdit ? editLayout : viewLayout}</Box>
        </div>
      </div>
    </BasicModal>
  );
}

const style = css`
  width: 100%;
  height: 100%;
  ${radius[24]};
  padding: 48px 84px 60px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > .title {
    height: 36px;
    display: flex;
    justify-content: space-between;
    color: ${color.dark1};
    line-height: 130%;
    font-size: 28px;
    > .report-btn {
      width: 100px;
      height: 43px;
    }
    .user {
      ${font.weight[700]};
      margin-right: 8px;
    }
  }
  > .wrapper {
    display: flex;
    justify-content: space-between;
    > .box {
      width: 100%;
      height: 100%;
      padding: 8px;
    }
    .carousel {
      width: 504px;
      height: 438px;
      margin: 0 auto;
    }
    > .postit {
      width: 600px;
      height: 470px;
      /* background-color: lightblue; */
    }
    .texts {
      position: relative;
      padding: 8px;
      height: 100%;
      > * {
        margin: 8px;
        color: ${color.dark1};
      }

      .title {
        font-size: 18px;
        display: flex;
        align-items: center;
        height: 23px;
        margin-bottom: 16px;
      }
      .wrapper {
        padding-right: 8px;
        overflow: auto;
      }
      .description {
        width: 304px;
        height: 316px;
        font-size: 14px;
      }
      > .footer {
        position: absolute;
        width: calc(336px - 16px);

        bottom: 0;
        margin: 0 inherit;
        padding-right: 8px;
        .complete {
          width: 74px;
          height: 43px;
        }
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;
