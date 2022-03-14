---
title: 'Mi Setup Front-end'
excerpt: 'Conoce el software que utilizo para realizar webs y webApps.'
coverImage: '/assets/blog/setup-frontend/blog-setup-frontend.webp'
ogImage: '/assets/blog/setup-frontend/og_image.jpg'
imageCaption: 'Foto por @iamthejean'
date: '2021-01-14T05:35:07.322Z'
author:
  name: Juan Berrios
is_published: true
---

Esta idea no se me ocurrió a mi, en cierta forma me estoy colgando de [este artículo de Tania Rascia](https://www.taniarascia.com/my-front-end-web-development-setup/).

Escribo este post ya que siempre he sido curioso por saber que herramientas, software y hardware usan otros profesionales del area. Esta vez es mi setup (bien básico) de software para Front-end actualizado en 2021.

## Sistema Operativo

En 2014 mi madre me regaló la Macbook Pro 2012 para mi cumpleaños y desde entonces macOS es el sistema operativo que utilizo. Hablar de el daría para largo, pero si tengo que dar algunas razones de porque es tan bueno serían su rapidez, interfaz amigable y una terminal en UNIX como las de los servidores que corren Linux. Antes de usar la Macbook con MacOS nunca utilicé comandos o una consola de comandos para realizar tareas tan naturales hoy para mi mientras trabajo.

**Sistema operativo**: macOS

## Navegador

Existen muchos hoy, pero mi favorito hace bastantes años es [Google Chrome](https://www.google.com/chrome). En este punto Chrome es mi elección solamente por costumbre, prestaciones de sincronización e interfaz, pero existen otras opciones tan buenas como lo son [Firefox](https://www.mozilla.org/firefox/new/), [Safari](https://www.apple.com/safari/), [Opera](https://www.opera.com/), [Edge](https://www.microsoft.com/en-us/edge), dentro de los más usados. Si eres de odiar lo mainstream puedes darle una oportunidad a [Vivaldi](https://vivaldi.com/), [Brave](https://brave.com/) o [Iridium](https://iridiumbrowser.de/) que están geniales y son modernos.

Como segunda opción uso Safari, pero solamente para cosas específicas y rara vez en el Macbook.

**Navegador**: Google Chrome

## Extensiones Web

Dentro de las cosas que hacen tan útiles a los navegadores actuales, es la capacidad de extender o personalizar su funcionalidad para mejorar la experiencia. Aquí hay algunas extensiones que actualmente tengo instalado en mi navegador (_Chrome_):

- [**Wappalyzer**](https://chrome.google.com/webstore/detail/wappalyzer/gppongmhjkpfnbhagpmjfkannfbllamg): Detecta las tecnologías que utiliza un sitio web.
- [**ColorZilla**](https://chrome.google.com/webstore/detail/colorzilla/bhlhnicpbhignbdhedgjhgdocnmhomnp): Util para usar como un cuentagotas dentro de un sitio web y extraer un color específico.
- [**GoFullPage**](https://chrome.google.com/webstore/detail/gofullpage-full-page-scre/fdpohaocaechififmbbbbbknoalclacl): Para hacer capturas de pantalla de una página completa (haciendo scroll hasta el final de la página)
- [**React Developer Tools**](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi): Herramientas útiles si trabajas con React
- [**Picture-in-Picture**](https://chrome.google.com/webstore/detail/picture-in-picture-extens/hkgfoiooedgoejojocmhlaklaeopbecg): Me encanta poner videos o reproducir contenido en una miniatura mientras trabajo o hago otra cosa.
- [**uBlock Origin**](https://chrome.google.com/webstore/detail/ublock-origin/cjpalhdlnbpafiamejdnhcphjbkeiagm): Indispensable para navegar con la menor cantidad de anuncios posible (eso incluye YouTube)

## Editor de texto / IDE / Consola

Pasé por [Sublime Text](https://www.sublimetext.com/) y [Atom](https://atom.io/). Hoy utilizo [Visual Studio Code](https://code.visualstudio.com/).

Como terminal de comandos uso [Hyper](https://hyper.is/), una terminal hermosa a la que se le pueden instalar temas y es super rápida.

**IDE**: Visual Studio Code \
**Terminal**: Hyper

## Stack

El stack viene a ser el conjunto de tecnologías que se necesitan para correr un sitio web. Por ejemplo [WordPress](http://wordpress.org/) necesita ejecutar el lenguaje PHP, en un servidor Apache o NGINX con una base de datos en MySQL.

Yo solía trabajar solo con LEMP (Linux, NGINX, MySQL, PHP). Últimamente, en proyectos personales he trabajado mucho con JAMstack (Javascript, API's, markup). Hoy salto entre uno y otro dependiendo de lo que el sitio web amerita o el presupuesto pueda ser capaz de costear.

**Stack preferido**: JAMStack

## Version Control Hosting

Hace como tres años atrás no usaba ninguna herramienta para control de versiones, lo que hacía mi trabajo muy complejo. Conocer Git y por supuesto [Github](https://github.com/) fue un cambio radical en mi manera de trabajar; mas ordenado, estructurado y enfocado en tareas.

Así como está Github, existen [GitLab](https://gitlab.com/) y [BitBucket](https://bitbucket.org/), aunque GitHub sigue siendo el más popular y para mi cumple perfecto.

**Version Control Hosting**: Github

## Hosting

Dentro de las razones que me motivaron a hacer este post está la grata sorpresa de haber probado [NearlyFreeSpeech](https://www.nearlyfreespeech.net/) (el que utiliza Tania). Antes de eso era fiel a [Digital Ocean](http://digitalocean.com/) y mi stack LEMP. Ahora le he estado dando la oportunidad a LAMP junto a MariaDB. Sin embargo, las posibilidades que da hoy un entorno JAMstack me hace preferir trabajar de esta forma hospedando mis aplicaciones en [Vercel](https://vercel.com/) y en raras ocasiones en [Netlify](http://netlify.com/).

**Hosting**: Vercel

## CMS

Hay todo un mundo en los CMS. Y aquí no me puedo decantar por uno solo, ya que dependiendo del proyecto utilizo uno u otro. Uso [WordPress](https://wordpress.org/) en la mayoría de los casos con clientes, por ser el que más conocido por mis clientes, sin embargo, me sigue produciendo amor y odio.

Hoy existen CMS para regodearse. Estos son algunos que utilizo o he utilizado y te recomiendo: [Sanity](http://sanity.io/), [Ghost](https://ghost.org/), [Contentful](https://www.contentful.com/), [GraphCMS](https://graphcms.com/), [Storyblok](https://www.storyblok.com/), [CraftCMS](https://craftcms.com/).

**CMS**: Wordpress (un poco a la fuerza)

## Preprocesador CSS

Muchas cosas que hoy se pueden hacer con CSS antes se podían hacer solo con preprocesadores. Hoy la cosa avanza hacia los Post-procesadores. [SASS](https://sass-lang.com/) es mi lenguaje de preprocesador favorito para CSS y no tengo una justificación para preferirlo por sobre otro, simplemente me gusta, me he acostumbrado a escribir sin “{}” y a declarar variables.

**CSS Preprocessor**: SASS

## Framework CSS

Debo ser sincero: no me gustan los frameworks de CSS. Sin embargo cuando trabajas en equipo y a contratiempo estás obligado utilizarlos. Actualmente el que más uso es [Tailwind](https://tailwindcss.com/). Aun así me he propuesto buscar otro aun más abstracto.

**Framework CSS**: Tailwind

## Cifrado (TLS/SSL)

Hoy es básico encriptar un sitio web. Google Chrome, por ejemplo, presenta problemas con algunos sitios que no lo están. Cuando el entorno no me ofrece este cifrado por defecto yo utilizo **Let’s Encrypt**. Es gratis, es seguro, es perfecto.

**Cifrado**: Let's Encrypt

## CDN

Un CDN sirve el contenido de tu sitio web a través de servidores ubicados en distintas partes del mundo, de esta forma si alguien entra a el, el CDN lo sirve desde el servidor más cercano. Yo uso [Cloudflare](https://www.cloudflare.com/es-es/), y para mi es suficiente. Sin embargo no lo necesito cuando utilizo [Vercel](http://vercel.com/), ya que ellos disponen de un buenisimo CDN incorporado.

**CDN**: El que ofrece **Vercel**, **Cloudflare** (_rara vez_)

Hay muchas otras cosas que de vez en cuando y dependiendo del proyecto podemos usar, pero esto es, en cierta forma, lo básico. Gracias por leer, espero haberte animado a probar algo nuevo.