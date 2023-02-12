# from flask import Flask, render_template
# from flask_socketio import SocketIO, emit
# import cv2
# import numpy as np
# import time
# import PoseModule as pm

# app = Flask(__name__)
# socketio = SocketIO(app)

# cap = cv2.VideoCapture(0)
# detector = pm.poseDetector()
# count = 0
# dir = 0
# pTime = 0

# @socketio.on('connect')
# def test_connect():
#     while True:
#         success, img = cap.read()
#         if not success:
#             break
#         else:
#             img = cv2.resize(img, (1280, 720))
#         img = detector.findPose(img, False)
#         lmList = detector.findPosition(img, False)
#         if len(lmList) != 0:
#             angle = detector.findAngle(img, 12, 24, 26)
#             per = np.interp(angle, (210, 310), (0, 100))
#             bar = np.interp(angle, (220, 310), (650, 100))
#             color = (255, 0, 255)
#             if per == 100:
#                 color = (0, 255, 0)
#                 if dir == 0:
#                     count += 0.5
#                     dir = 1
#             if per == 0:
#                 color = (0, 255, 0)
#                 if dir == 1:
#                     count += 0.5
#                     dir = 0
#             ret, buffer = cv2.imencode('.jpg', img)
#             frame = buffer.tobytes()
#             emit('video_feed', {'frame': frame.tobytes()})
#             cTime = time.time()
#             fps = 1 / (cTime - pTime)
#             pTime = cTime
#             cv2.putText(img, str(int(fps)), (50, 100), cv2.FONT_HERSHEY_PLAIN, 5,
#                         (255, 0, 0), 5)

# @app.route('/')
# def index():
#     return render_template('index.html')

# if __name__ == '__main__':
#     socketio.run(app, host='0.0.0.0', port=5010)

    
    

