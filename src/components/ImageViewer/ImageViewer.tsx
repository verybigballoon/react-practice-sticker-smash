import React from "react";
import { Image, ImageSourcePropType } from "react-native";

interface Props {
  placeholderImageSource: ImageSourcePropType;
}

const styles = {
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
};

const ImageViewer = ({ placeholderImageSource }: Props) => {
  return <Image source={placeholderImageSource} style={styles.image} />;
};

export default ImageViewer;
