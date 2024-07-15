# 신규 프로젝트 Setting Guide
수정할 파일 
- **config.xml**
- **app-environ.ts**

## config.xml
아래 순서대로 개발할 앱으로 명칭 변경 필요

<docgen-index>

1. [`widget id`](#id)

2. [`widget ios-CFBundleVersion`](#ios-cfbundleversion)

3. [`widget version`](#version)

4. [`name`](#name)

5. [`description`](#description)

6. [`StatusBarBackgroundColor`](#statusbarbackgroundcolor)

7. [`AndroidManifest CompanyCode Setting`](#androidmanifest)

8. [`CFBundleURLTypes`](#cfbundleurltypes)
</docgen-index>

<docgen-api>

### id
앱의 패키지명을 입력
```typescript
<widget ... id="개발할 앱의 패키지명" ...>

// ex)
<widget ... id="com.skt.pe.meetingreservation" ...>
```

### ios-CFBundleVersion
IOS 앱 버전 입력
```typescript
<widget ... ios-CFBundleVersion="1.0.0">
```

### version
안드로이드 앱 버전 입력
```typescript
<widget ... version="1.0.0">
```

### name
앱 이름 입력
```typescript
<widget . . . ">
  <name>개발할 앱이름 작성</name>
</widget>

// ex)
<widget . . . ">
  <name>T net 피드</name>
</widget>
```

### description
앱 설명 입력
```typescript
<widget . . . ">
  <description>개발할 앱설명 작성</description>
</widget>

// ex)
<widget . . . ">
  <description>SKT T net 피드</description>
</widget>
```

### StatusBarBackgroundColor
StatusBar 색상 설정
```typescript
<preference name="StatusBarBackgroundColor" value="#6e78ff" />
```

### AndroidManifest
개발할 앱의 관계사로 변경 필요
```typescript
<edit-config file="AndroidManifest.xml" mode="insert" target="/manifest/application/activity/intent-filter">
    <category android:name="android.intent.category.앱의 관계사 입력" />
    <category android:name="android.intent.category.SKSUBGROUP" />
</edit-config>

// ex)
<edit-config file="AndroidManifest.xml" mode="insert" target="/manifest/application/activity/intent-filter">
    <category android:name="android.intent.category.SKT" />
    <category android:name="android.intent.category.SKSUBGROUP" />
</edit-config>
```

### CFBundleURLTypes
개발할 IOS 패키지명 및 앱ID 입력
```typescript
<widget . . . ">
  . . .
    <config-file parent="CFBundleURLTypes" target="*-Info.plist">
    <array>
        <dict>
            <key>CFBundleTypeRole</key>
            <string>Editor</string>
            <key>CFBundleURLName</key>
            <string>com.skt.pe.meetingreservation</string>
            <key>CFBundleURLSchemes</key>
            <array>
                <string>I000ST0083</string>
            </array>
        </dict>
    </array>
    </config-file>
  . . .
</widget>
```

</docgen-api>

## AppEnviron.ts
src/app/modules/app-environ.ts

<docgen-index>

1. [`App ID Setting`](#appid)

</docgen-index>

<docgen-api>

### AppID
개발 할 앱 ID로 셋팅 필요

```typescript
private androidPhoneAppID: string   = "Z0000PE026";
private androidTabletAppID: string  = "Z0000PE026";
private iPhoneAppID: string         = "I000ST0083";
private iPadAppID: string           = "I000ST0083";
```

</docgen-api>