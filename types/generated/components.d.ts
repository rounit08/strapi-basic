import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentsAnalytics extends Schema.Component {
  collectionName: 'components_components_analytics';
  info: {
    displayName: 'Analytics';
    icon: 'manyWays';
  };
  attributes: {
    DatasenseAI: Attribute.String;
    InsightIQ: Attribute.String;
    DatawiseAI: Attribute.String;
  };
}

export interface ComponentsChatbots extends Schema.Component {
  collectionName: 'components_components_chatbots';
  info: {
    displayName: 'chatbots';
    icon: 'gate';
  };
  attributes: {
    Meta_Llama: Attribute.String;
    ChatGPT: Attribute.String;
    Perplexity: Attribute.String;
    Codeium: Attribute.String;
  };
}

export interface ComponentsHardware extends Schema.Component {
  collectionName: 'components_components_hardware';
  info: {
    displayName: 'Hardware';
    icon: 'command';
  };
  attributes: {
    AlcoreProcessor: Attribute.String;
    NeuralNetChip: Attribute.String;
    DeepBrainAccelerator: Attribute.String;
  };
}

export interface ComponentsNavitems extends Schema.Component {
  collectionName: 'components_components_navitems';
  info: {
    displayName: 'navitems';
  };
  attributes: {
    AIBots: Attribute.Component<'components.chatbots'>;
    Analytics: Attribute.Component<'components.analytics'>;
    Hardware: Attribute.Component<'components.hardware'>;
  };
}

export interface HeadericonHeaderIcon extends Schema.Component {
  collectionName: 'components_headericon_header_icons';
  info: {
    displayName: 'header icon';
    icon: 'database';
  };
  attributes: {};
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'components.analytics': ComponentsAnalytics;
      'components.chatbots': ComponentsChatbots;
      'components.hardware': ComponentsHardware;
      'components.navitems': ComponentsNavitems;
      'headericon.header-icon': HeadericonHeaderIcon;
    }
  }
}
