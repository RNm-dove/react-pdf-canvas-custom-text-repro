import { Document, Page, Text, View, Font, Canvas } from "@react-pdf/renderer";

Font.register({
  family: "Noto Sans JP",
  fonts: [{ src: "/fonts/NotoSansJP-Regular.ttf", fontWeight: "normal" }],
});

Font.registerHyphenationCallback((word) =>
  Array.from(word).flatMap((char) => [char, ""])
);

// Create Document Component
export const MyDocument = () => (
  <Document
    style={{
      fontFamily: "Noto Sans JP",
    }}
  >
    <Page
      size="A4"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#E4E4E4",
      }}
    >
      <View
        style={{
          margin: 10,
          padding: 10,
        }}
      >
        <Canvas
          style={{
            height: 300,
            width: "100%",
            backgroundColor: "white",
          }}
          paint={(painter) => {
            painter.fillColor("black").fontSize(20).text(
              "Hello", // This works
              10,
              10,
              {
                align: "center",
                baseline: "middle",
              }
            );

            painter.fillColor("black").fontSize(20).text(
              "こんにちは", // This doesn't work
              10,
              40,
              {
                align: "center",
                baseline: "middle",
              }
            );
            return null;
          }}
        ></Canvas>
        {/* NOTE: Insert Text */}
        <Text>Custom text in canvas works after this Text block inserted!</Text>
        <Canvas
          style={{
            height: 300,
            width: "100%",
            backgroundColor: "white",
          }}
          paint={(painter) => {
            painter.fillColor("black").fontSize(20).text(
              "Hello", // This works
              10,
              10,
              {
                align: "center",
                baseline: "middle",
              }
            );

            painter.fillColor("black").fontSize(20).text(
              "こんにちは", // This also works after Text is inserted above.
              10,
              40,
              {
                align: "center",
                baseline: "middle",
              }
            );

            return null;
          }}
        ></Canvas>
      </View>
    </Page>
  </Document>
);
