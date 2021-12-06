<template>
  <div class="container">
    <article>
      <h1 class="title">{{post.title}}</h1>
      <p>{{post.content}}</p>
    </article>
    <aside>
      <h3>
        <h3>Jokes you might enjoy</h3>
        <ul>
          <li :key="related.slug" v-for="related in relatedPosts">
            <NuxtLink :to="'/posts/' + related.slug" class="button--grey">{{related.title}}</NuxtLink>
          </li>
        </ul>
      </h3>
    </aside>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data() {
    return {
      slug: this.$route.params.slug
    };
  },
  head() {
    return {
      title: "Page of " + post.title,
      meta: [
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.content },
        { name: "twitter:image", content: "https://i.imgur.com/UYP2umJ.png" },
        { name: "twitter:card", content: "summary_large_image" }
      ]
    };
  },
  computed: {
    post() {
      return this.posts.find(post => post.slug === this.slug);
    },
    relatedPosts() {
      return this.posts.filter(post => post.slug !== this.slug);
    },
    ...mapState('posts', ['posts'])
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  line-height: 1.5;
}
article * {
  margin-bottom: 1rem;
}
aside {
  min-width: 280px;
  max-width: 280px;
  padding-left: 2rem;
}
.title {
  font-size: 2rem;
}
</style>