/*
 * Copyright (c) Akveo 2019. All Rights Reserved.
 * Licensed under the Single Application / Multi Application License.
 * See LICENSE_SINGLE_APP / LICENSE_MULTI_APP in the 'docs' folder for license information on type of purchased license.
 */

import { AppConfigService } from '@/_core/services/app-config.service';
import {
  NbAuthOAuth2JWTToken,
  NbAuthOptions,
  NbOAuth2AuthStrategy,
  NbOAuth2ClientAuthMethod,
  NbOAuth2GrantType,
  NbOAuth2ResponseType,
  NbPasswordAuthStrategy } from '@nebular/auth';

export const socialLinks = [
  {
    url: 'https://github.com/akveo/nebular',
    target: '_blank',
    icon: 'github',
  },
  {
    url: 'https://www.facebook.com/akveo/',
    target: '_blank',
    icon: 'facebook',
  },
  {
    url: 'https://twitter.com/akveo_inc',
    target: '_blank',
    icon: 'twitter',
  },
];

export const authOptions: NbAuthOptions = {
  strategies: [
    NbPasswordAuthStrategy.setup({
      name: 'email',
      baseEndpoint: 'url', //AppConfigService.Settings.authUrl,
      token: {
        class: NbAuthOAuth2JWTToken,
        key: 'token',
      },
      login: {
        endpoint: '/auth/login',
        method: 'post',
      },
      register: {
        endpoint: '/auth/sign-up',
        method: 'post',
      },
      logout: {
        endpoint: '/auth/sign-out',
        method: 'post',
      },
      requestPass: {
        endpoint: '/auth/request-pass',
        method: 'post',
      },
      resetPass: {
        endpoint: '/auth/reset-pass',
        method: 'post',
      },
      refreshToken: {
        endpoint: '/auth/refresh-token',
        method: 'post',
      },
    }),
    NbOAuth2AuthStrategy.setup({
      name: 'oauth',
      baseEndpoint: 'https://localhost:7543/', //AppConfigService.Settings.authUrl,
      clientId: 'trainers-web',
      clientSecret: 'trainers-pass',
      clientAuthMethod: NbOAuth2ClientAuthMethod.BASIC,
      redirect: {
        success: '/',
        failure: null,
      },
      authorize: {
        endpoint: 'connect/authorize',
        scope: 'openid profile api1',
        redirectUri: 'http://localhost:4200',
        responseType: NbOAuth2ResponseType.CODE,
      },
      token: {
        endpoint: 'connect/token',
        scope: 'openid profile IdentityServerApi',
        redirectUri: 'http://localhost:4200',
        grantType: NbOAuth2GrantType.PASSWORD,
        class: NbAuthOAuth2JWTToken,
      },
      refresh: {
        endpoint: 'connect/token',
        grantType: NbOAuth2GrantType.REFRESH_TOKEN,
      },
    }),
  ],
  forms: {
    logout: {
      strategy: 'oauth',
      redirect: 'auth/login',
    },
    login: {
      strategy: 'oauth',
      socialLinks: socialLinks,
    },
    register: {
      socialLinks: socialLinks,
    },
    validation: {
      email: {
        required: true,
      },
      password: {
        required: true,
        minLength: 6,
        maxLength: 20,
      },
    },
  },
};
