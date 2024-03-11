<h1>Chat.io</h1>

A real-time chat application using Socket.io.<br/>

<h3>Table of Contents</h3>
<ol>
  <li><a href="#features">Features</a></li>
  <li><a href="#schema">Schema</a></li>
  <li><a href="#techstack">Tech stack</a></li>
  <li><a href="#screenshots">Screenshots</a></li>
</ol>

<h3 id="features">Features</h3>
<hr/>
<ul>
  <li>Signup and Login using JWT Authentication.</li>
  <li>One-on-one chat and group chats. Edit groups - search, add, remove members.</li>
  <li>Socket.io implementation for real-time chat updation.</li>
  <li>Features for displaying notification badges and typing animations.</li>
</ul>

<strong>Site Link</strong> - https://chat-io-c1wc.onrender.com/

<h3 id="schema">Schema</h3>
<hr/>
<h4>User</h4>
<table>
  <tr>
    <th>Property</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>name</td>
    <td>String</td>
    <td>Name of the user</td>
  </tr>
  <tr>
    <td>email</td>
    <td>String</td>
    <td>Email id of the user</td>
  </tr>
  <tr>
    <td>password</td>
    <td>String</td>
    <td>Encrypted user password</td>
  </tr>
  <tr>
    <td>pic</td>
    <td>String</td>
    <td>Link to profile image</td>
  </tr>
  <tr>
    <td>isAdmin</td>
    <td>Boolean</td>
    <td>if the user is an admin of a group chat</td>
  </tr>
</table>

<br/>
<h4>Chat</h4>
<table>
  <tr>
    <th>Property</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>chatName</td>
    <td>String</td>
    <td>Name of the group chat (name of the user in case of one-on-one chat)</td>
  </tr>
  <tr>
    <td>isGroupChat</td>
    <td>Boolean</td>
    <td>true if the chat is a group chat</td>
  </tr>
  <tr>
    <td>users</td>
    <td>Array</td>
    <td>array of user ids</td>
  </tr>
  <tr>
    <td>latestMessage</td>
    <td>ObjectId</td>
    <td>id of the latest message</td>
  </tr>
  <tr>
    <td>groupAdmin</td>
    <td>ObjectId</td>
    <td>id of the group admin</td>
  </tr>
</table>

<br/>
<h4>Message</h4>
<table>
  <tr>
    <th>Property</th>
    <th>Type</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>sender</td>
    <td>ObjectId</td>
    <td>id of the user who sent the message</td>
  </tr>
  <tr>
    <td>content</td>
    <td>String</td>
    <td>the actual message</td>
  </tr>
  <tr>
    <td>chat</td>
    <td>ObjectId</td>
    <td>id of the chat to which the message belongs</td>
  </tr>
  <tr>
    <td>readBy</td>
    <td>Array</td>
    <td>array of user ids who viewed the message</td>
  </tr>
</table>


<h3 id="techstack">Tech Stack</h3>
<hr/>
<ul>
  <li>ReactJS</li>
  <li>NodeJS</li>
  <li>Express</li>
  <li>Socket.io</li>
  <li>Chakra UI</li>
  <li>MongoDB</li>
  <li>Mongoose</li>
</ul>

<h3 id="screenshots">Screenshots</h3>
<hr/>
<img width="1512" alt="Screenshot 2024-02-29 at 9 09 30 PM" src="https://github.com/shreyas710/Chat.io/assets/62650542/baeac118-36aa-41ca-8dd6-f25227a684cb">
<br/>
<img width="1512" alt="Screenshot 2024-02-29 at 9 11 20 PM" src="https://github.com/shreyas710/Chat.io/assets/62650542/8c69c590-8b75-434c-999c-79e0748c9102">
