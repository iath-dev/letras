import React from 'react';
import { Form, Song, Artist } from './components';
import Axios from 'axios';

function App() {

  const [info, setInfo] = React.useState({});
  const [lyric, setLyric] = React.useState('');
  const [author, setAuthor] = React.useState({});

  React.useEffect(() => {
    if (Object.keys(info).length < 1) return;

    const ConsultLyric = async () => {

      const { artist, song } = info;

      const lyricURL = `https://api.lyrics.ovh/v1/${artist}/${song}`;
      const infoURL = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

      // Método para realizar todas las promesas de forma paralela.
      const [lyrics, information] = await Promise.all([
        Axios(lyricURL),
        Axios(infoURL)
      ]);

      setLyric(lyrics.data.lyrics);
      setAuthor(information.data.artists[0]);
    }

    ConsultLyric();

  }, [info])

  return (
    <React.Fragment>
      <Form setInfo={setInfo} />
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <Artist info={author} />
          </div>
          <div className="col-md-6">
            { lyric && <Song lyric={lyric} />}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
