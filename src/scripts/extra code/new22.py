import cv2
import mediapipe as mp
import time

mpDraw = mp.solutions.drawing_utils
mpPose = mp.solutions.pose
pose = mpPose.Pose()
cap = cv2.VideoCapture(0)
pTime = 0

MIN_HEIGHT = 0.5 # adjust this value to change the threshold for detecting fall

def is_falling(pose_landmarks):
    # Check if the height of the hip is lower than the threshold
    hip_height = pose_landmarks.landmark[8].y
    if hip_height < MIN_HEIGHT:
        return True
    return False

while True:
    success, img = cap.read()
    if not success:
        break
    imgRGB = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    results = pose.process(imgRGB)
    if results.pose_landmarks:
        mpDraw.draw_landmarks(img, results.pose_landmarks, mpPose.POSE_CONNECTIONS)
        if is_falling(results.pose_landmarks):
            print("Fall detected")
        else:
            print("No fall detected")
    cTime = time.time()
    fps = 1 / (cTime - pTime)
    pTime = cTime
    cv2.putText(img, str(int(fps)), (70, 50), cv2.FONT_HERSHEY_PLAIN, 3, (255, 0, 0), 3)
    cv2.imshow("Image", img)
    if cv2.waitKey(1) == 27: # press 'esc' to exit the loop
        break

cap.release()
cv2.destroyAllWindows()