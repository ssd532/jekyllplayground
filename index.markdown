---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home-with-dynamic-menu
---


# Dhandanought Reflections

You know me as tcpip. This site is my site, discussing stuff that I dabble in and think about.

Who am I? I am an Indian, Bengali, living in India, 40+, male. I have engineering degrees. You will guess some of this if you read some of my notes here and there.

Broadly, I intend to talk about my key activities and hobbies, which are, as of now
- computers, computing and information systems
- food, cooking and eating out,
- photography, and
- audio systems and music

On the food front, I'll have recipes that I am familiar with, plus various articles about places to eat at and things to do with food. I've decided on a name for this section: "Jaamva chalo ji". It expresses exactly both my fondness for Parsis and what I feel about that uniquely Bengali/Parsi attitude towards food and eating.
In photography, I guess I'll put up a few images, and write whatever bits and pieces come to my mind about clicking and cameras.

Under audio, there are two distinct but related themes: music itself, and listening to music on audio systems at home. I am no musician, so I will not be writing about making music. On the subject of music, I guess I'll be writing about the music that I like, and experiences I've been through related to music listening. And on the audio front, I guess I will be writing about my explorations in the world of music reproduction technology and the building of audio systems -- in particular, amps and speakers.

# Posts

<p>
  {% for post in site.posts %}
      <span>{{ post.date | date: "%b %-d, %Y" }}</span>
      <h2>
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </h2>
  {% endfor %}
</p>

