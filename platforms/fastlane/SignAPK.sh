

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/AppDev/mobiliarCustomerApp.keystore ../android/build/outputs/apk/android-release-unsigned.apk mobiliarCustomerApp
rm ../android/build/outputs/apk/fastlaneApp_signed.apk
~/Library/Android/sdk/build-tools/25.0.2/zipalign -v 4 ../android/build/outputs/apk/android-release-unsigned.apk ../android/build/outputs/apk/fastlaneApp_signed.apk
