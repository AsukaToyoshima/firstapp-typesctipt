//ルーティングファイル
const express = require('express');
const router = express.Router();

//サーバーサイドの処理を読み込み
const allPosts = require('../controllers/posts/allPosts');
const createGet = require('../controllers/posts/createGet');
const createPost = require('../controllers/posts/createPost');

//リクエストに対するアクション(実行処理)を定義
router.get('/posts', allPosts);               //投稿一覧表示
router.get('/posts/create', createGet);       //投稿画面表示
router.post('/posts/create', createPost);     //投稿処理

module.exports = router;
