export interface PostProps {
  objects: ObjectPost[];
}

interface ObjectPost {
  slug: string;
  title: string;
  metadata: {
    banner: {
      url: string;
    };
    button: {
      title: string;
      url: string;
    };
    description: {
      text: string;
      title: string;
      banner: {
        url: string;
      };
      button_active: boolean;
      button_title: string;
      button_url: string;
    };
  };
}
