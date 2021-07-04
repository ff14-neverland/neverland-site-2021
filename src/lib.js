import queryString from 'query-string';
import moment from 'moment-timezone';
moment.locale('zh-cn');
export default {
  pagination(currentPage, totalPages){
    const delta = 2;
    const left = currentPage - delta;
    const right = currentPage + delta + 1;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (i == 1 || i == totalPages || i >= left && i < right) {
        range.push(i);
      }
    }
    for (let i of range) {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    }
    return rangeWithDots;
  },
  fetchSimpleContent(url){
    return new Promise((resolve, reject) => {;
      fetch(url, {method: 'GET'})
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        resolve(result);
      })
      .catch(error => console.error(error));
    });
  },
  fetchPost(url, params){
    return new Promise((resolve, reject) => {
      const paramsString = queryString.stringify(params);
      const fullUrl = url + '?' + paramsString + '&_embed';
      fetch(fullUrl, {method: 'GET'})
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        const post = result[0];
        let image = null;
        if(post['_embedded']['wp:featuredmedia']){
          image = post['_embedded']['wp:featuredmedia'][0]['source_url'];
        }
        const postContent = {
          title: this._removeUnicode(post.title.rendered),
          date: moment(post.date).tz('Asia/Hong_Kong').format('LLL'),
          content: post.content.rendered,
          fields: post.custom_fields,
          characters: post.characters,
          relatedTag: post.related_tag,
          image,
        };
        if(post.categories){
          postContent.type = post.categories[0];
        }
        resolve(postContent);
      })
      .catch(error => console.error(error));
    });
  },
  fetchCharas(url, params){
    return new Promise((resolve, reject) => {
      const paramsString = queryString.stringify(params);
      const fullUrl = url + '?' + paramsString + '&_embed';
      fetch(fullUrl, {method: 'GET'})
      .then((response) => {
        //Add total pages data to fetch result
        return new Promise((resolve, reject) => {
          response.json().then((result) =>{
            const data = {
              charas: result,
              pages: response.headers.get('X-WP-TotalPages'),
            };
            resolve(data);
          });
        });
      })
      .then((data) => {
        const charas = [];
        //Pre process charas data.
        for(let i = 0; i < data.charas.length; i++){
          const chara = data.charas[i];
          let image = null;
          if(chara['_embedded']['wp:featuredmedia']){
            image = chara['_embedded']['wp:featuredmedia'][0]['source_url'];
          }
          const charaContent = {
            id: chara.id,
            title: this._removeUnicode(chara.title.rendered),
            image,
          }
          charas.push(charaContent);
        }
        const charasData = {
          charas,
          pages: data.pages,
        }
        resolve(charasData);
      })
      .catch(error => console.error(error));
    });
  },
  fetchPosts(url, params){
    return new Promise((resolve, reject) => {
      const paramsString = queryString.stringify(params);
      const fullUrl = url + '?' + paramsString;
      fetch(fullUrl, {method: 'GET'})
      .then((response) => {
        //Add total pages data to fetch result
        return new Promise((resolve, reject) => {
          response.json().then((result) =>{
            const data = {
              posts: result,
              pages: response.headers.get('X-WP-TotalPages'),
            };
            resolve(data);
          });
        });
      })
      .then((data) => {
        const posts = [];
        for(let i = 0; i < data.posts.length; i++){
          const post = data.posts[i];
          let postContent = post.content.rendered;
          postContent = this._removeHtml(postContent);
          postContent = this._removeUnicode(postContent);
          postContent = postContent.substring(0, 150) + '...';
          const newPost = {
            id: post.id,
            title: this._removeUnicode(post.title.rendered),
            content: postContent,
          }
          posts.push(newPost);
        }
        const postsData = {
          posts,
          pages: data.pages,
        }
        resolve(postsData);
      })
      .catch(error => console.error(error));
    });
  },
  fetchHighlight(url, params){
    return new Promise((resolve, reject) => {
      const paramsString = queryString.stringify(params);
      const fullUrl = url + '?' + paramsString + '&_embed';
      fetch(fullUrl, {method: 'GET'})
      .then((response) => {
        return response.json()
      })
      .then((result) => {
        const highlights = [];
        resolve(highlights);
      })
      .catch(error => console.error(error));
    });
  },
  _removeHtml(text){
    return text.replace(/<(?:.|\n)*?>/gm, '');
  },
  _removeUnicode(text){
    const textArea = document.createElement('textarea');
  	textArea.innerHTML = text;
  	return textArea.value;
  },
}
