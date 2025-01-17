/** @format */

import { useState, useEffect } from 'react';
import { cx, css } from '@emotion/css';
import {
  Categories,
  Category,
  OrderedImg,
  MarkBox,
  Img,
  NewPost,
  Carousel,
} from '../../components';
import { Resign, LoginModal } from '../';
import { RootState, AppDispatch } from '../../redux/root';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Profile, Spec } from '../../pages/';
import Edit from '../spec/Edit';

export default function HG() {
  return <Edit />;
}
