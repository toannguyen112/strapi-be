import type { Schema, Attribute } from '@strapi/strapi';

export interface SharedChild extends Schema.Component {
  collectionName: 'components_shared_children';
  info: {
    displayName: 'parent';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    child: Attribute.Component<'shared.parent-child', true>;
  };
}

export interface SharedMetaSocial extends Schema.Component {
  collectionName: 'components_shared_meta_socials';
  info: {
    displayName: 'metaSocial';
    icon: 'project-diagram';
  };
  attributes: {
    socialNetwork: Attribute.Enumeration<['Facebook', 'Twitter']> &
      Attribute.Required;
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    description: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 65;
      }>;
    image: Attribute.Media;
  };
}

export interface SharedParentChild extends Schema.Component {
  collectionName: 'components_shared_parent_children';
  info: {
    displayName: 'parent-child';
    description: '';
  };
  attributes: {
    title: Attribute.Text;
    link: Attribute.String;
    image: Attribute.Media;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    metaTitle: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaDescription: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 50;
        maxLength: 160;
      }>;
    metaImage: Attribute.Media;
    metaSocial: Attribute.Component<'shared.meta-social', true>;
    keywords: Attribute.Text;
    metaRobots: Attribute.String;
    structuredData: Attribute.JSON;
    metaViewport: Attribute.String;
    canonicalURL: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'shared.child': SharedChild;
      'shared.meta-social': SharedMetaSocial;
      'shared.parent-child': SharedParentChild;
      'shared.seo': SharedSeo;
    }
  }
}
