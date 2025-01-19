import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import { slides } from './data.js';
import 'yet-another-react-lightbox/styles.css';
import {
  Captions,
  Counter,
  Download,
  Fullscreen,
  Thumbnails,
  Zoom,
} from 'yet-another-react-lightbox/plugins';
import 'yet-another-react-lightbox/plugins/captions.css';
import 'yet-another-react-lightbox/plugins/thumbnails.css';
import "yet-another-react-lightbox/plugins/counter.css";

import Images from './Images.js';
import * as React from 'react';

function App() {
  // const [open, setOpen] = useState<boolean>(false);
  const [index, setIndex] = useState<number>(-1);

  return (
    <>
      {/* <button onClick={() => setOpen(true)}>Open Lightbox</button> */}

      <Images
        data={slides}
        onClick={(currentIndex: React.SetStateAction<number>) => setIndex(currentIndex)}
      />

      <Lightbox
        plugins={[Captions,Counter, Download, Fullscreen, Zoom, Thumbnails]}
        captions={{
          showToggle: true,
          descriptionTextAlign: 'end',
        }}
        // open={open}
        // close={() => setOpen(false)}
        counter={{ container: { style: { left: "unset", bottom: 0 } } }}
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={slides}
      />
    </>
  );
}

export default App;