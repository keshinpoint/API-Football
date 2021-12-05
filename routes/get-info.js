// below are the swagger docs added with the swagger-js npm library
/**
* @swagger
* /api/v1/stats/{playerID}:
*   get:
*     summary: Gets information about a specific football player
*     description: Gets information about a specific football player
*     tags:
*       - Football player
*     parameters:
*       - in: path
*         name: playerID
*         type: integer
*         required: true
*         description: A unique ID assigned to each player
*     responses:
*       '200':
*         description: A successful response indicating the server was able to provide information about the football player
*         content:
*           application/json:
*             schema:
*               type: object
*               properties:
*                 id:
*                   type: integer
*                   description: A unique ID assigned to each player
*                 wins:
*                   type: integer
*                   description: The number of won games the player was in
*                 losses:
*                   type: integer
*                   description: The number of lost games the player was in
*                 points_scored:
*                   type: integer
*                   description: The total number of goals scored by the player
*
*
* /api/v1/stats:
*   post:
*     summary: Creates new information about a specific football player
*     tags:
*       - Football player
*     description: Creates a new football player in the database
*     consumes:
*       - application/json
*     parameters:
*       - in: body
*         name: playerInfo
*         description: Information about the football player you want to create
*         schema:
*           type: object
*           properties:
*             id:
*               type: integer
*             wins:
*               type: integer
*               description: The number of won games the player was in
*             losses:
*               type: integer
*               description: The number of lost games the player was in
*             points_scored:
*               type: integer
*               description: The total number of goals scored by the player
*     responses:
*       '200':
*         description: Successfully created a new football player
*/
