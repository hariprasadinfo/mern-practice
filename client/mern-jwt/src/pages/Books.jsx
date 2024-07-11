import React, { useState } from "react";

function Books() {
  const initialFormState = {
    name: "",
    author: "",
    description: "",
    price: "",
    isInStock: "",
  };
  const [formData, setFormData] = useState(initialFormState);

  const [file, setFile] = useState();
  const [fileName, setFileName] = useState();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    let addBookForm = new FormData();
    addBookForm.append("path", file);
    addBookForm.append("fileName", fileName);
    addBookForm.append("name", formData.name);
    addBookForm.append("author", formData.author);
    addBookForm.append("description", formData.description);
    addBookForm.append("price", formData.price);
    addBookForm.append("isInStock", formData.isInStock);
    console.log(addBookForm);
    // setFormData(initialFormState);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileInputChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  return (
    <>
      <div>
        <h2 className="p-9 font-bold tracking-wider text-3xl text-cyan-500 flex justify-center">
          Add Book
        </h2>
      </div>
      <div className=" flex justify-center">
        <form onSubmit={handleSubmitForm}>
          <div className="mb-9 grid">
            <input
              type="text"
              placeholder="Enter Book Name..."
              className="input input-lg input-bordered mb-9"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
            />
            {/* </div>
        <div className="mb-9"> */}
            <input
              type="text"
              placeholder="Author"
              className="input input-lg input-bordered mb-9"
              name="author"
              value={formData.author}
              onChange={handleInputChange}
            />
            {/* </div>
        <div className="mb-9"> */}
            <textarea
              className="textarea textarea-bordered mb-9"
              placeholder="Description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
            ></textarea>
            {/* </div>
        <div className="mb-9"> */}
            <input
              type="text"
              placeholder="Price"
              className="input input-lg input-bordered mb-9"
              name="price"
              value={formData.price}
              onChange={handleInputChange}
            />
            <div className="form-control w-52 mb-9">
              <label className="label cursor-pointer">
                <span className="label-text">Stock Available</span>
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  name="isInStock"
                  value={formData.isInStock}
                  onChange={handleInputChange}
                  defaultChecked
                />
              </label>
            </div>
            <input
              type="file"
              className="file-input w-full max-w-xs mb-9"
              name="file"
              onChange={handleFileInputChange}
            />
            <button type="submit" className="btn btn-outline">Add Book</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Books;
