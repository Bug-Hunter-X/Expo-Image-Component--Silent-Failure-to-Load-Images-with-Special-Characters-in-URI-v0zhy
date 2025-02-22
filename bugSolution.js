The solution is to manually encode the URI using `encodeURI` or `encodeURIComponent` before passing it to the Expo `Image` component. `encodeURIComponent` is generally preferred for URIs as it encodes more characters.

**Example:**

```javascript
import React from 'react';
import { Image } from 'expo-image';

const MyComponent = () => {
  const imageUrl = 'https://example.com/image with spaces.jpg';
  const encodedImageUrl = encodeURIComponent(imageUrl);

  return (
    <>
      <Image source={{ uri: encodedImageUrl }} style={{ width: 200, height: 200 }} />
      <Image source={{ uri: 'https://images.unsplash.com/photo-1649061697260-85f5055c6175?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' }} style={{ width: 200, height: 200 }} />
    </>
  );
};

export default MyComponent;
```

By using `encodeURIComponent`, the URI is correctly encoded, and the image loads successfully.