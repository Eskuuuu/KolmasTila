import {useState} from "react";
import "./feed.css";

function InstagramFeed() {

  const images = [
    "./images/skeittarit.JPG",
    "./images/työpaja.JPG",
    "./images/vaalit.JPG",
    "./images/biljardi.JPG",
    "./images/kuvis.JPG",
    "./images/gamer.JPG"
  ];

  const headers = [
    "ANNA ja MILLI | Skeittikontti",
    "MIKKO | Malmin VPK:n nuoriso-osasto",
    "ALISA | Etu-Töölön lukio",
    "JESSE | Nuorisotalo Vintti",
    "ENJA | Nuori Taide",
    "JOOSUA | Tampereen Pelifarmi"

  ];
  const captions = [
    "Anna ja Milli tapasivat viime kesänä Helsingin Skeittikontilla, kun he kokeilivat skeittaamista ensimmäisen kerran Skeittikontin ohjatussa kokeilussa. Kontilta saa lainata laudan sekä suojia, joten uutta harrastusta voi kokeilla ennen omien varusteiden ostamista. Skeittauksen lisäksi Anna ja Milli olivat kontilla mukana myös rakentamassa hyppyriä Helride-tapahtumaan sekä opettelemassa skeittauksen kuvaamista pienessä kisassa. Skeittikontti on tänäkin kesänä auki arkisin klo 11–19!",
    "17-vuotias Mikko löysi kolmannen tilansa Malmin VPK:n nuoriso-osastolta yläasteella järjestetyn vierailun kautta. Osastolla 11–17-vuotiaat nuoret saavat harjoitella palokaluston käsittelyä, ensiapua ja muita tärkeitä taitoja. Mikko on ollut toiminnassa mukana jo pitkään, ja hän ei ainoastaan osallistu itse harjoituksiin, vaan myös ohjaa varhaisnuoriso-osastoa. 18 vuotta täytettyään Mikko pääsee siirtymään hälytysosastoon, mutta hän aikoo myös jatkaa varhaisnuoriso-osaston ohjausta.",
    "16-vuotias Alisa löysi itselleen sopivan kolmannen tilan lukionsa yhteiskuntaopin kerhosta, joka tarjoaa yhteistä tekemistä yhteiskuntatieteiden opiskelusta kiinnostuneille nuorille. Lukion tiloissa järjestettäviin tapahtumiin on helppo jäädä koulupäivän jälkeen ja ohjaajina toimivat tutut koulun opettajat. Kuvassa on käynnissä kerhon järjestämät lukion nuorten vaalit.",
    "Inarissa harrastaminen voi olla ajoittain vaikeaa pitkien välimatkojen takia. 15-vuotiaan Jessen voi kuitenkin löytää Nuorisotalo Vintiltä lähes jokaisena arkipäivänä koulun jälkeen. Nuorisotalo tarjoaa monia erilaisia aktiviteetteja saman katon alla, kuten digipelejä, biljardia, pingistä, lautapelejä, ilmakiekkoa ja pöytäjalkapalloa. Vintillä on lisäksi keittiö, joten siellä viihtyy helposti pidempäänkin välipalan voimin. Uusien kaverien lisäksi Jesse on tutustunut myös nuorisotaloa pyörittäviin aikuisiin, joista on tullut tuttuja kasvoja vuosien aikana. Vintti on auki arkisin klo 13-18, kaikki ovat tervetulleita!",
    "18-vuotias Enja löysi tähän hetkeen täydellisen kolmannen tilan Nuori Taide -foorumin kautta. Vapaamuotoinen toiminta sopii hänelle juuri nyt ylioppilaskirjoitusten keskellä, kun aikataulutettuun tai viikottaiseen toimintaan sitoutuminen ei ole mahdollista. Foorumin SoMe-kanavien ja chattien välityksellä hän pystyy pitämään yhteyttä muihin taiteesta kiinnostuneisiin nuoriin ja jatkamaan omaa taideharrastustaan itsenäisesti, kunnes hän pääsee taas osallistumaan tapahtumiin, koulutuksiin ja työpajoihin. Enjan töitä on nähtävillä foorumin ylläpitämässä nuorten portfoliosivusto Taide\Foliossa! Kuva on viime vuoden Nuori Taide -tapahtumasta.",
    "Joosua löysi Tampereen Pelifarmin osallistuttuaan pelitilalla järjestettyyn lan-tapahtumaan puoli vuotta sitten. Tapahtumassa osallistujat tuovat oman pelitietokoneen paikan päälle ja niillä pelataan pelejä yhdessä samassa tilassa koko tapahtuman ajan. Ennen 14-vuotias Joosua pelasi lähinnä yksin kotona, mutta nykyään hän viettää paljon aikaa pelitilalla uusien pelikavereidensa kanssa. Kesän jälkeen hän aikoo kokeilla kilpapelaamista harrastuksena ja ehkä tehdä itselleen treeniohjelman Pelifarmin ohjaajien kanssa."

  ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div className="instagram-feed">
      {images.map((imageUrl, index) => (
        <div
          key={index}
          className="instagram-post"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onTouchStart={() => handleMouseEnter(index)}
          onTouchEnd={handleMouseLeave}
        >
          {hoveredIndex === index ? (
            <div className="caption-box">
              <div className="post-header">{headers[index]}</div>
              <div className="post-caption">{captions[index]}</div>
            </div>
          ) : (
            <img
              src={imageUrl}
              alt={captions[index]}
              className="post-image"
            />
          )}
        </div>
      ))}
    </div>
  )

};


export default InstagramFeed

































/* alunperin piti käyttää instagram API:ta, mut tää ei nyt toiminutkaan.
import React, { useState, useEffect} from "react";
import {InstagramFetcher} from 'node_modules/instagram-fetcher';
import "./feed.css"


function InstagramFeed() {
  
  const [media, setMedia] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    const fetcher = new InstagramFetcher('IGQWRQajUybjRuMUVXXzNUMkVLVldYZAUc0SG91TGxXT1QzcERZAT2ZArWGN4ZAG1vNFBUSTNqWUw2QV9PT182NTdVb29ZAbWc2dzZAySEhRNXBmWV96TjBaZA09oYkJrTlplbkc2RmdKbTgzS05ubDBUX0JPTzVFS3hZAT3MZD');

    fetcher.fetch()
      .then((media) => {
        console.log(media);
        setMedia(media);
        setLoading(false);
      })
      .catch((error) => {
        console.error(`Error: ${error.message}`);
        setError(error.message);
        setLoading(false);
      });
    })
    
    return (
      error? (
        <p>Error: {error}</p>
      ):
      loading? (
        <div className="instagram-feed">
          {Array.from({length:6},(_,index) => (
            <div key={index} className="instagram-post-skeleton">
              <div className="skeleton-image"></div>
            </div>
          ))}
        </div>
      ): (
        <div className="instagram-feed">
          {media.map((post) =>(
            <div key={post.id} className="instagram-post">
              <img src={post.url} alt="Instagram Post" className="post-image"/>
              <p className="post-caption">{post.caption}</p>
            </div>
          ))}
        </div>
      )
    );
  

};
export default InstagramFeed
*/