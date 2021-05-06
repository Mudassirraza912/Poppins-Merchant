import { Alert } from 'react-native';
import { RNS3 } from 'react-native-aws3'
import { S3_BUCKET_OPTIONS } from '../constants/Constant_options'
import { useState } from 'react/cjs/react.development';

export const uploadFile_to_s3_bucket = (imageObj, setUploadSuccessMessage) => {
    var uploadingMsg;
    if (Object.keys(imageObj).length == 0) {
      Alert.alert("Alert" ,'Please select image first');
      return;
    }
    RNS3.put(
      imageObj,
      S3_BUCKET_OPTIONS,
    )
      .progress((progress) =>
            uploadingMsg = `${progress.loaded / progress.total} (${
            progress.percent
          }%`,
      )
      .then((response) => {
        if (response.status !== 201) Alert.alert("Alert" ,'Failed to upload image to S3');
        console.log(response);
        let {
          bucket,
          etag,
          key,
          location
        } = response.body.postResponse;
        console.log(
          `Uploaded Successfully: 
          \n1. bucket => ${bucket}
          \n2. etag => ${etag}
          \n3. key => ${key}
          \n4. location => ${location}`,
        );

        return response.body.postResponse
        /**
         * {
         *   postResponse: {
         *     bucket: "your-bucket",
         *     etag : "9f620878e06d28774406017480a59fd4",
         *     key: "uploads/image.png",
         *     location: "https://bucket.s3.amazonaws.com/**.png"
         *   }
         * }
         */
      });
  };