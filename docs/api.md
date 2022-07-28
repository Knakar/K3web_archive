# K3 Web
- 責任者 エリンギしめじ
## フロント仕様

| uri | description |
| -------- | -------- |
| / | landing page |
| /admin | administration page |
| /new/user | create an user account |
| /new/contest | create a contest |
| /contests/[id]/ | show certain contest information |
| /contests/[id]/edit | edit certain contest if allowed |
| /users/[id]/ | show certain user profile |
| /users/[id]/edit | show certain user profile if allowed |

## バックエンド仕様
/api/v1/...

| URI | Method | Description |
| -------- | -------- | -------- |
| /contests/ | GET | return all contests |
| /contests/ | POST | create contest |
| /contests/[id] | GET | return a contest |
| /contests/[id] | PUT | update a contest |
| /contests/[id] | DELETE | delete a contest |
| /contests/[id]/participants | POST | recieve user id and add it into the contest |
| /contests/[id]/problems | GET | return all problems |
| /contests/[id]/problems | POST | add a problem into a contest |
| /contests/[contest_id]/problems/[problem_id] | PUT | update a problem |
| /contests/[contest_id]/problems/ | DELETE | delete all problems in a contest |
| /contests/[contest_id]/problems/[problem_id] | DELETE | delete a problem in a contest |
| | | | | |
| /users/ | POST | create user |
| /users/[id] | PUT | update user |
| /users/[id] | DELETE | delete user |
| /users/[id]/roles | POST | recieve role id and add it into the user |
| /users/[id]/roles | delete | delete all roles of a user |
| /users/[user_id]/roles/[role_id] | delete | delete a role of a user |

## Commit規約
Conventional commit

## Issue規約
[Front | Back] :type label: subject

## Branch規約
branch名はdefaultのものを使う

## コーディング規約
変数名は、camelCase（単語の先頭を大文字）
クラス、型は、PascalCase
定数は、すべて大文字のSNAKE_CASE
未使用の変数名には先頭にアンダーバーをつける

## コーディング規約
変数名は、camelCase（単語の先頭を大文字）
クラス、型は、PascalCase
定数は、すべて大文字のSNAKE_CASE
未使用の変数名には先頭にアンダーバーをつける

| 種類 | ケース |
| ---- | -------- | 
| 変数 | camelCase |
| クラス, 型 | PascalCase | 
| 定数 | SNAKE_CASE |

### ESLint