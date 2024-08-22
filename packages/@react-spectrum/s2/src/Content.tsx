/*
 * Copyright 2024 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */

import {ContextValue, Keyboard as KeyboardAria, Header as RACHeader, Heading as RACHeading, SlotProps, Text as TextAria, useContextProps} from 'react-aria-components';
import {createContext, forwardRef, ImgHTMLAttributes, ReactNode} from 'react';
import {DOMRef, DOMRefValue} from '@react-types/shared';
import {StyleString} from '../style/types';
import {UnsafeStyles} from './style-utils';
import {useDOMRef} from '@react-spectrum/utils';
import {useSpectrumContextProps} from './useSpectrumContextProps';

interface ContentProps extends UnsafeStyles, SlotProps {
  children?: ReactNode,
  styles?: StyleString,
  isHidden?: boolean
}

interface HeadingProps extends ContentProps {
  level?: number
}

export const HeadingContext = createContext<ContextValue<HeadingProps, DOMRefValue<HTMLHeadingElement>>>(null);

// Wrapper around RAC Heading to unmount when hidden.
function Heading(props: HeadingProps, ref: DOMRef<HTMLHeadingElement>) {
  [props, ref] = useSpectrumContextProps(props, ref, HeadingContext);
  let domRef = useDOMRef(ref);
  let {UNSAFE_className = '', UNSAFE_style, styles, isHidden, slot, ...otherProps} = props;
  if (isHidden) {
    return null;
  }

  return (
    <RACHeading
      {...otherProps}
      ref={domRef}
      className={UNSAFE_className + styles}
      style={UNSAFE_style}
      slot={slot || undefined} />
  );
}

const _Heading = forwardRef(Heading);
export {_Heading as Heading};

export const HeaderContext = createContext<ContextValue<ContentProps, DOMRefValue<HTMLElement>>>(null);

function Header(props: ContentProps, ref: DOMRef) {
  [props, ref] = useSpectrumContextProps(props, ref, HeaderContext);
  let domRef = useDOMRef(ref);
  let {UNSAFE_className = '', UNSAFE_style, styles, isHidden, slot, ...otherProps} = props;
  if (isHidden) {
    return null;
  }

  return (
    <RACHeader
      {...otherProps}
      ref={domRef}
      className={UNSAFE_className + styles}
      style={UNSAFE_style}
      slot={slot || undefined} />
  );
}

const _Header = forwardRef(Header);
export {_Header as Header};

export const ContentContext = createContext<ContextValue<ContentProps, DOMRefValue<HTMLDivElement>>>(null);

function Content(props: ContentProps, ref: DOMRef<HTMLDivElement>) {
  [props, ref] = useSpectrumContextProps(props, ref, ContentContext);
  let domRef = useDOMRef(ref);
  let {UNSAFE_className = '', UNSAFE_style, styles, isHidden, slot, ...otherProps} = props;
  if (isHidden) {
    return null;
  }
  return (
    <div
      {...otherProps}
      ref={domRef}
      className={UNSAFE_className + styles}
      style={UNSAFE_style}
      slot={slot || undefined} />
  );
}

const _Content = forwardRef(Content);
export {_Content as Content};

export const TextContext = createContext<ContextValue<ContentProps, DOMRefValue>>(null);

function Text(props: ContentProps, ref: DOMRef) {
  [props, ref] = useSpectrumContextProps(props, ref, TextContext);
  let domRef = useDOMRef(ref);
  let {UNSAFE_className = '', UNSAFE_style, styles, isHidden, slot, ...otherProps} = props;
  if (isHidden) {
    return null;
  }
  return (
    <TextAria
      {...otherProps}
      ref={domRef}
      className={UNSAFE_className + styles}
      style={UNSAFE_style}
      slot={slot || undefined} />
  );
}

const _Text = forwardRef(Text);
export {_Text as Text};

export const KeyboardContext = createContext<ContextValue<ContentProps, DOMRefValue>>({});

function Keyboard(props: ContentProps, ref: DOMRef) {
  [props, ref] = useSpectrumContextProps(props, ref, KeyboardContext);
  let domRef = useDOMRef(ref);
  let {UNSAFE_className = '', UNSAFE_style, styles, isHidden, slot, ...otherProps} = props;
  if (isHidden) {
    return null;
  }
  return (
    <KeyboardAria
      {...otherProps}
      ref={domRef}
      className={UNSAFE_className + styles}
      style={UNSAFE_style}
      slot={slot || undefined} />
  );
}

const _Keyboard = forwardRef(Keyboard);
export {_Keyboard as Keyboard};

export const FooterContext = createContext<ContextValue<ContentProps, DOMRefValue>>({});

function Footer(props: ContentProps, ref: DOMRef) {
  [props, ref] = useSpectrumContextProps(props, ref, FooterContext);
  let domRef = useDOMRef(ref);
  let {UNSAFE_className = '', UNSAFE_style, styles, isHidden, slot, ...otherProps} = props;
  if (isHidden) {
    return null;
  }
  return (
    <footer
      {...otherProps}
      ref={domRef}
      className={UNSAFE_className + styles}
      style={UNSAFE_style}
      slot={slot || undefined} />
  );
}

const _Footer = forwardRef(Footer);
export {_Footer as Footer};

export const ImageContext = createContext<ContextValue<ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>>({});

function Image(props: ImgHTMLAttributes<HTMLImageElement>, ref: DOMRef<HTMLImageElement>) {
  let domRef = useDOMRef(ref);
  [props, domRef] = useContextProps(props, domRef, ImageContext);
  if (props.hidden) {
    return null;
  }

  if (props.alt == null) {
    console.warn(
      'The `alt` prop was not provided to an image. ' +
      'Add `alt` text for screen readers, or set `alt=""` prop to indicate that the image ' +
      'is decorative or redundant with displayed text and should not be announced by screen readers.'
    );
  }

  return <img alt={props.alt} {...props} ref={domRef} />;
}

const _Image = forwardRef(Image);
export {_Image as Image};