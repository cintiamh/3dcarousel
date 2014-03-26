describe '3D Carousel', ->
  it 'should be true', ->
    expect(true).toBeTruthy

  it 'should have a carousel', ->
    expect(window.carousel).not.toBeUndefined()

  it 'should return the image size', ->
    parent = document.createElement("ul")
    child = document.createElement("li")
    image = new Image()
    image.src = "https://s.yimg.com/dh/ap/it/disney/carousel/3/1024x692_frozen.jpg"
    child.appendChild(image)
    parent.appendChild(child)
    document.body.appendChild(parent)
    imageSize = window.carousel.getImageSize(parent)
    expect(imageSize).not.toBeNull()
    expect(imageSize.width).toBe(1024)
    expect(imageSize.height).toBe(768)