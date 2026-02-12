from fastapi import FastAPI

app = FastAPI(title="Laptop Lens ML Service")


@app.get("/ml/health")
def health():
    return {"status": "OK", "service": "laptop-lens-ml"}


if __name__ == "__main__":
    import uvicorn

    uvicorn.run(app, host="0.0.0.0", port=8000)

