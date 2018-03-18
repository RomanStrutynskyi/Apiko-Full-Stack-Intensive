import { Comment } from "../../molecules/comment/comment";
import { Article } from "../../molecules/article/article";
export default {
  // tag:{
  //   body:'body'
  // },
  init() {
    const self = this;
    document.addEventListener("DOMContentLoaded", this.getJson('posts'));
    this.openPost(self);
    this.openUser(self);
  },
  getJson(link,comment=false) {
    if(comment){
      fetch(`https://jsonplaceholder.typicode.com/${link}`)
        .then(response => response.json())
          .then(json => this.listComments(json))    
    }else{
      fetch(`https://jsonplaceholder.typicode.com/${link}`)
        .then(response => response.json())
          .then(json => this.listArticles(json))
    }
  },
  listArticles(json) {
    let container = document.createElement('div');
    container.className = "container";
    document.body.innerHTML = "";
    if ($(json).length > 1) {
      json.forEach(element => {
        container.appendChild(Article.init(element));
      });
      document.body.appendChild(container);
    } else {
      container.appendChild(Article.init(json));
      document.body.appendChild(container);
    }

  },
  listComments(json) {
    let comments = document.createElement('div');
    comments.className = "comments";
    let title = document.createElement('h2');
    title.innerHTML = 'Comments';
    comments.appendChild(title);
    if ($(json).length > 1) {
      json.forEach(element => {
        comments.appendChild(Comment.init(element));
      });
      document.querySelector(".container").appendChild(comments);
    } else {
      comments.appendChild(Comment.init(json));
      document.querySelector(".container").appendChild(comments);      
    }

  },
  openPost(self) {
    $(document).on("click", '.js-post', function () {
      let postId = $(this).data('post');
      self.getJson(`posts/${postId}`);
      setTimeout(()=> {
        self.getJson(`posts/${postId}/comments`, true);
      }, 100);

    });
  },
  openUser(self) {
    $(document).on("click", '.js-user', function () {
      let userId = $(this).data('user');
      let json = self.getJson(`posts?userId=${userId}`)
    });
  }
}
