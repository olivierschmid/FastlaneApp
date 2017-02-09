

jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore ~/AppDev/mobiliarCustomerApp.keystore platforms/android/build/outputs/apk/android-release-unsigned.apk mobiliarCustomerApp

~/Library/Android/sdk/build-tools/25.0.2/zipalign -v 4 platforms/android/build/outputs/apk/android-release-unsigned.apk fastlaneApp.apk
