# Expo Image Component: Silent Failure to Load Images with Special Characters in URI

This repository demonstrates a bug in the Expo `Image` component where images with URIs containing special characters (spaces, accented characters, etc.) fail to load silently.  The issue is related to incorrect URI encoding within Expo's internal image handling.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `expo start`.
4. Observe that the image with special characters in its URI fails to load without any error messages in the console. The image with correctly encoded URI will load correctly.

## Solution

The solution involves manually encoding the URI before passing it to the `Image` component.  This ensures the URI is properly formatted for the underlying native image loading libraries.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you have any suggestions or improvements.