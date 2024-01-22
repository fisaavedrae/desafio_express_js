<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->



<!-- PROJECT SHIELDS -->
<!--
*** I'm using markdown "reference style" links for readability.
*** Reference links are enclosed in brackets [ ] instead of parentheses ( ).
*** See the bottom of this document for the declaration of the reference variables
*** for contributors-url, forks-url, etc. This is an optional, concise syntax you may use.
*** https://www.markdownguide.org/basic-syntax/#reference-style-links
-->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/fisaavedrae/desafio_express_js">
    <img src="./assets/images/fse_logo_blanco.jpg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Desafio Express Js</h3>

  <p align="center">
    project_description
    <br />
    <a href="https://github.com/fisaavedrae/desafio_express_js"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/fisaavedrae/desafio_express_js">View Demo</a>
    ·
    <a href="https://github.com/fisaavedrae/desafio_express_js/issues">Report Bug</a>
    ·
    <a href="https://github.com/fisaavedrae/desafio_express_js/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Contenido</summary>
  <ol>
    <li>
      <a href="#about-the-project">Acerca del Proyecto</a>
      <ul>
        <li><a href="#built-with">Construido con</a></li>
      </ul>
    </li>    
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## Desafío - Mi repertorio

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<ol>
<li>
Para realizar este desafío debes haber estudiado previamente todo el material
disponible correspondiente a la unidad.
</li>
<li>Una vez terminado el desafío, comprime la carpeta que contiene el desarrollo de los
requerimientos solicitados y sube el .zip en el LMS.</li>
<li>Puntaje total: 10 puntos</li>
<li>Desarrollo desafío:
<ol>
<li>El desafío se debe desarrollar de manera Grupal.</li>
<li>Para la realización del desafío necesitarás apoyarte del archivo Apoyo  - Mi Repertorio.</li>
</li>
</ol></ol>

## Descripción
La escuela de música “E-Sueño” está motivando a sus estudiantes de canto a presentarse
en vivo y se puso en contacto con el restaurante del sector para utilizar su tarima e iniciar un
calendario de presentaciones. Para conocer y gestionar las canciones que cantarán sus
estudiantes, la escuela contrató a un desarrollador freelance para la creación de una
aplicación tipo CRUD.
En este desafío deberás desarrollar un servidor con Express que utilice el módulo File
System para agregar, modificar y eliminar canciones almacenadas en un JSON local llamado
repertorio.json.
El servidor deberá disponibilizar las siguientes rutas:
<ol>
<li>POST /canciones : Recibe los datos correspondientes a una canción y la agrega al
repertorio.</li>
<li>GET /canciones : Devuelve un JSON con las canciones registradas en el </li>
<li>PUT /canciones/:id : Recibe los datos de una canción que se desea editar y la
actualiza manipulando el JSON local.</li>
<li>DELETE /canciones/:id : Recibe por queryString el id de una canción y la elimina del
repertorio.</li>
</ol>
Tienes a disposición un <b>Apoyo Desafío - Mi Repertorio</b> con la aplicación cliente que se
muestra en la siguiente imagen, lista para el consumo de estas rutas, por lo que deberás
enfocarte solo en el desarrollo backend.

## Requerimientos
<ul>
<li>Levantar un servidor local usando Express Js (2 Puntos)</li>
<li>Devolver una página web como respuesta a una consulta GET (2 Puntos)</li>
<li>Ofrecer diferentes rutas con diferentes métodos HTTP que permitan las operaciones
CRUD de datos alojados en un archivo JSON local (3 Puntos)</li>
<li>Manipular los parámetros obtenidos en la URL (1 Puntos)</li>
<li>Manipular el payload de una consulta HTTP al servidor (2 Puntos)</li>
</ul>


<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Node][Node.js]][Node-url]
* [![Express][Express.js]][Express-url]
* [![Json][Json]][Json-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Uso

Para ejecutar el proyecto se debe usar nodemon y cors

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contacto

Felipe Saavedra - [@fisaavedrae](https://twitter.com/fisaavedrae) - fisaavedrae@gmail.com

Project Link: [https://github.com/fisaavedrae/desafio_express_js](https://github.com/fisaavedrae/desafio_express_js)

<p align="right">(<a href="#readme-top">back to top</a>)</p>






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/fisaavedrae/desafio_express_js.svg?style=for-the-badge
[contributors-url]: https://github.com/fisaavedrae/desafio_express_js/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/fisaavedrae/desafio_express_js.svg?style=for-the-badge
[forks-url]: https://github.com/fisaavedrae/desafio_express_js/network/members
[stars-shield]: https://img.shields.io/github/stars/fisaavedrae/desafio_express_js.svg?style=for-the-badge
[stars-url]: https://github.com/fisaavedrae/desafio_express_js/stargazers
[issues-shield]: https://img.shields.io/github/issues/fisaavedrae/desafio_express_js.svg?style=for-the-badge
[issues-url]: https://github.com/fisaavedrae/desafio_express_js/issues
[license-shield]: https://img.shields.io/github/license/fisaavedrae/desafio_express_js.svg?style=for-the-badge
[license-url]: https://github.com/fisaavedrae/desafio_express_js/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/fisaavedrae
[product-screenshot]: https://github.com/fisaavedrae/desafio_express_js/blob/main/assets/images/screenshot.png
[Node.js]: https://img.shields.io/badge/node.js-000000?style=for-the-badge&logo=nodedotjs&logoColor=white
[Node-url]: https://nodejs.org/en
[Express.js]: https://img.shields.io/badge/express.js-000000?style=for-the-badge&logo=express&logoColor=white
[Express-url]: https://expressjs.com/
[Json]: https://img.shields.io/badge/json-000000?style=for-the-badge&logo=json&logoColor=white
[Json-url]: https://www.json.org/json-es.html
